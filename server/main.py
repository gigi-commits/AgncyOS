# server/main.py
from fastapi import FastAPI, Header
from pydantic import BaseModel

app = FastAPI(title="AgncyOS Mock API")

class ValuationRequest(BaseModel):
    sessionId: str

@app.post("/auth/initiate")
async def auth_initiate():
    return {"token": "demo-token"}

@app.post("/data/fetch")
async def data_fetch(Authorization: str = Header(None)):
    if Authorization != "Bearer demo-token":
        return {"error": "unauthorized"}
    return {"sessionId": "demo-session"}

@app.post("/valuation/generate")
async def valuation_generate(req: ValuationRequest):
    return {"valuation": {"l12m": 120000, "avg_month": 10000, "projection_24m": 220000}, "offer": {"min": 70000, "max": 90000}}

@app.post("/offer/issue")
async def offer_issue():
    return {"offerId": "offer-123"}

@app.post("/payout/trigger")
async def payout_trigger():
    return {"status": "initiated", "provider": "AgncyPay"}
