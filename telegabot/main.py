import asyncio
import psycopg2
from aiogram import Bot, Dispatcher, types, F
from aiogram.filters.command import Command
import datetime

con = psycopg2.connect(

        database = 'verceldb',
        user = 'default',
        password = 'y3lIO7HZYKqx',
        host =  'ep-billowing-tree-04832905.eu-central-1.postgres.vercel-storage.com', 
        port = '5432',
        )
TOKEN = "6658876239:AAHJkK7Z_yB7iXtEt8QeqkNYB4-kqkkoOr8" 

bot = Bot(token=TOKEN)
dp = Dispatcher()

def format_event(event):
    return f"""
***{event[0]}***

    *{event[3]}*
    {event[1].strftime("%d.%m.%Y в %H:%M")} 

{event[2]}
                """

class User:
    ids = []
    auth_id = []
    



@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    kb = [
            [types.KeyboardButton(text="Глянуть новые события")],
            [types.KeyboardButton(text="Авторизироваться")]
            ]
    keyborad = types.ReplyKeyboardMarkup(keyboard=kb)
    await message.answer("HahahAlo! Это бот для просмотра событий от -- поxyiзавры.", reply_markup = keyborad)


@dp.message(F.text.lower() == "глянуть новые события")
async def get_events(message: types.Message):
    cursor_obj = con.cursor()
    events = ["Вот они, слева  направо... То есть сверху вниз "]
    try:
        cursor_obj.execute('SELECT name, "startDate", description, location FROM "Events" WHERE "startDate" >= now();')
    except:
        await message.answer("К сожалению, база данных пока что не отвечает...") 
    data = cursor_obj.fetchmany(100)


    for event in data:
        events.append(format_event(event))
    cursor_obj.close()
    for event in events:
        await message.answer(event, parse_mode='markdown')



@dp.message(F.text.lower() == "авторизоваться")
async def auth(message : types.Message):
            pass


async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())


