import sqlite3


conn = sqlite3.connect('UserData.db')

cur = conn.cursor()

cur.execute('''
    CREATE TABLE IF NOT EXISTS Users(
        Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
        Nome TEXT NOT NULL, 
        Email TEXT NOT NULL, 
        User TEXT NOT NULL,
        Senha TEXT NOT NULL
    )
''')
print('Conectado ao banco de dados')
