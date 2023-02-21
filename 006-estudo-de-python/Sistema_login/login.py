from tkinter import *
from tkinter import messagebox
from tkinter import ttk
import database

# Criando Janela de Login
login = Tk()
login.title('tela de login')
login.geometry('600x400')
login.resizable(False, False)
login.attributes('-alpha', 2)
login.iconbitmap('images/login.ico')

#===================== Carregar Imagens =======================
logo = PhotoImage(file='images/logo.png')

#=========================== Widgets ===========================
leftFrame = Frame(login, width=200, height=400, bg='MIDNIGHTBLUE', relief='raise')
leftFrame.pack(side=LEFT)

rightFrame = Frame(login, width=395, height=400, bg='MIDNIGHTBLUE', relief='raise')
rightFrame.pack(side=RIGHT)

logoLabel = Label(leftFrame, image=logo, bg='MIDNIGHTBLUE')
logoLabel.place(x=50, y=100)

userLabel = Label(rightFrame, text='Usuario:', font=('century Gothic', 20), bg='MIDNIGHTBLUE', fg='White')
userLabel.place(x=15, y=100)

userEntry = ttk.Entry(rightFrame, width=40)
userEntry.place(x=125, y=111)

senLabel = Label(rightFrame, text='Senha:', font=('century Gothic', 20), bg='MIDNIGHTBLUE', fg='White')
senLabel.place(x=15, y=150)

senEntry = ttk.Entry(rightFrame, width=40, show='•')
senEntry.place(x=125, y=161)

#==========================Botões============================
# Login
def LoginClick():
    User = userEntry.get()
    Senha = senEntry.get()  

    database.cur.execute('''
    SELECT * FROM Users
    WHERE (User = ? and Senha = ?)
    ''', (User, Senha))

    VerifyLoginClick = database.cur.fetchone()
    try:    
        if (User in VerifyLoginClick and Senha in VerifyLoginClick):
            messagebox.showinfo(title='Login Info', message='Acesso Confirmado. Bem Vindo!')
    except:
        messagebox.showinfo(title='Login Info', message='Acesso Negado. Verifique Se o Login a senha estão corretos!')
    print('Selecionou')

    # teste de uma segunda aba Fé em Deus que vai ksks
    # if VerifyLoginClick == VerifyLoginClick:
    if LoginClick == LoginClick:
        if (User in VerifyLoginClick and Senha in VerifyLoginClick):
            jan2 = Tk()
            jan2.geometry('400x200')
            jan2['bg'] = 'red'
            
            login.destroy()
            jan2.mainloop()
            
            if (User in VerifyLoginClick and Senha in VerifyLoginClick):
                LoginClick.destroy(login)

btn_login = ttk.Button(rightFrame, text='Login', width=30, command=LoginClick)
btn_login.place(x=85, y=225)

def cadastroClick():
    # Removendo widgets de login
    btn_login.place(x=5000)
    btn_cadastro.place(x=5000)
    print('Register')

    # inserindo widgets de Cadastro
    nomeLabel = Label(rightFrame, text='Nome: ', font=('Century Gothic', 20), bg='MIDNIGHTBLUE', fg='white')
    nomeLabel.place(x=15, y=5)

    nomeEntry = ttk.Entry(rightFrame, width=40)
    nomeEntry.place(x=125, y=17)

    emailLabel = Label(rightFrame, text='E-mail: ', font=('Century Gothic', 20), bg='MIDNIGHTBLUE', fg='white')
    emailLabel.place(x=15, y=50)

    emailEntry = ttk.Entry(rightFrame, width=40)
    emailEntry.place(x=125, y=65)

    # -- Botão Register -- que vai ser conectado ao banco de dados
    def register_Database():
        Nome = nomeEntry.get()
        Email = emailEntry.get()
        User = userEntry.get()
        Senha = senEntry.get()
        
        if (Nome == "" and Email == "" and User == "" and Senha == ""):
            messagebox.showerror(title='Regitro Erro', message='Preencha todos os Campos')
        else:
            database.cur.execute('''
                INSERT INTO Users(Nome, Email, User, Senha) VALUES(?, ?, ?, ?)
            ''', (Nome, Email, User, Senha))
            database.conn.commit()
            messagebox.showinfo(title='Register Info', message='Conta Criada Sucesso')

    btn_register = ttk.Button(rightFrame, text='Registar', width=30, command=register_Database)
    btn_register.place(x=85, y=225)

    # Removendo widgets de cadastro
    def backToLogin():
        nomeLabel.place(x=5000)
        nomeEntry.place(x=5000)
        
        emailLabel.place(x=5000)
        emailEntry.place(x=5000)

        btn_back.place(x=5000)
        btn_register.place(x=5000)
    
        # trazendo os widgets de login de volta 
        btn_login.place(x=85)
        btn_cadastro.place(x=100)

    btn_back = ttk.Button(rightFrame, text='Voltar', width=25, command=backToLogin)
    btn_back.place(x=100, y=265)

# Cadastros
btn_cadastro = ttk.Button(rightFrame, text='Cadastro', width=25, command=cadastroClick)
btn_cadastro.place(x=100, y=265)

login.mainloop()
