import json
import os
from datetime import datetime
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    '''Обработка заявок: ФИО, телефон, род деятельности -> Telegram'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        data = json.loads(event.get('body', '{}'))
        
        name = data.get('name', '')
        phone = data.get('phone', '')
        role = data.get('role', '')
        form_type = data.get('formType', 'module01')
        
        if not name or not phone or not role:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Заполните все обязательные поля'})
            }
        
        timestamp = datetime.now().strftime('%d.%m.%Y %H:%M')
        
        telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if not telegram_token or not telegram_chat_id:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Telegram не настроен'})
            }
        
        send_telegram_notification(telegram_token, telegram_chat_id, name, phone, role, form_type, timestamp)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка принята'})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка сервера: {str(e)}'})
        }


def send_telegram_notification(token: str, chat_id: str, name: str, phone: str, role: str, form_type: str, timestamp: str):
    '''Отправка уведомления в Telegram'''
    module_name = 'HUMAN + AI' if form_type == 'module01' else 'VIBE MARKETING'
    
    message = f"Новая заявка на кэмп!\n\nМодуль: {module_name}\nФИО: {name}\nТелефон: {phone}\nЧем занимается: {role}\n\nВремя: {timestamp}"
    
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    params = {'chat_id': chat_id, 'text': message}
    
    data = urllib.parse.urlencode(params).encode('utf-8')
    req = urllib.request.Request(url, data=data)
    urllib.request.urlopen(req)
