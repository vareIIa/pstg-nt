import json

# Carregar o arquivo json
with open('db.json') as f:
    data = json.load(f)

# Criar um dicionário para contar as ocorrências de cada login
login_counts = {}
for item in data:
    login = item['login']
    if login in login_counts:
        login_counts[login] += 1
    else:
        login_counts[login] = 1

# Encontrar e imprimir logins duplicados
duplicated_logins = [login for login, count in login_counts.items() if count > 1]
print('Logins duplicados:', duplicated_logins)