import json
import os
from datetime import datetime
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    '''Обработка заявок с формы: отправка в Telegram'''
    
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
        email = data.get('email', '')
        telegram = data.get('telegram', '')
        role = data.get('role', '')
        form_type = data.get('formType', 'module01')
        
        if not name or not email or not telegram:
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
        
        send_telegram_notification(
            telegram_token, 
            telegram_chat_id, 
            name, 
            email, 
            telegram, 
            role, 
            form_type, 
            timestamp
        )
        
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


def send_telegram_notification(token: str, chat_id: str, name: str, email: str, telegram: str, role: str, form_type: str, timestamp: str):
    '''Отправка уведомления в Telegram'''
    
    module_name = 'HUMAN + AI' if form_type == 'module01' else 'VIBE MARKETING'
    
    message = f"""🚀 Новая заявка на кэмп!

📋 Модуль: {module_name}
👤 Имя: {name}
📧 Email: {email}
💬 Telegram: {telegram}"""
    
    if role:
        message += f"\n💼 Чем занимается: {role}"
    
    message += f"\n\n🕐 Время: {timestamp}"
    
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    params = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }
    
    data = urllib.parse.urlencode(params).encode('utf-8')
    req = urllib.request.Request(url, data=data)
    urllib.request.urlopen(req)
