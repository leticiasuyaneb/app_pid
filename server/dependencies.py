# server/dependencies.py

from sqlalchemy.orm import Session
from server.database import SessionLocal

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
