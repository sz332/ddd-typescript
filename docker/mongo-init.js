db.auth('admin', 'admin')
db = db.getSiblingDB('ddd')
db.createCollection('users')

