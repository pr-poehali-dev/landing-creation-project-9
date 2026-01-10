import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """
    Служебная функция для настройки webhook Telegram бота.
    Вызовите эту функцию один раз для активации бота.
    """
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    try:
        token = os.environ.get('TELEGRAM_SUPPORT_BOT_TOKEN') or os.environ.get('TELEGRAM_BOT_TOKEN')
        if not token:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'error': 'TELEGRAM_SUPPORT_BOT_TOKEN not found in environment',
                    'success': False
                })
            }
        
        # URL webhook'а для основной функции бота
        webhook_url = 'https://functions.poehali.dev/910dd905-a1cd-4295-9847-9fadfbba3c02'
        
        # Настраиваем webhook
        api_url = f'https://api.telegram.org/bot{token}/setWebhook'
        data = json.dumps({'url': webhook_url}).encode('utf-8')
        
        req = urllib.request.Request(
            api_url,
            data=data,
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req, timeout=10) as response:
            result = json.loads(response.read().decode('utf-8'))
        
        # Проверяем информацию о боте
        bot_info_url = f'https://api.telegram.org/bot{token}/getMe'
        with urllib.request.urlopen(bot_info_url, timeout=10) as response:
            bot_info = json.loads(response.read().decode('utf-8'))
        
        # Получаем информацию о webhook
        webhook_info_url = f'https://api.telegram.org/bot{token}/getWebhookInfo'
        with urllib.request.urlopen(webhook_info_url, timeout=10) as response:
            webhook_info = json.loads(response.read().decode('utf-8'))
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': True,
                'webhook_set': result,
                'bot_info': bot_info,
                'webhook_info': webhook_info,
                'message': 'Webhook успешно настроен! Бот готов к работе.'
            }, ensure_ascii=False)
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': str(e),
                'success': False
            })
        }
