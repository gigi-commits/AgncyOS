# AgncyOS Widget

Embeddable AgncyOS widget for artist identity, royalty ingestion, real-time valuation, instant offers via **AgncyCapital**, and payouts via **AgncyPay**.

## Project Structure
```
AgncyOS/
├── README.md
├── index.html
├── /src
│   ├── widget.js
│   ├── api.js
│   └── styles.css
├── /server
│   └── main.py
├── requirements.txt
└── .gitignore
```

## Quickstart
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn server.main:app --reload
```

## API Endpoints
- POST /auth/initiate
- POST /data/fetch
- POST /valuation/generate
- POST /offer/issue
- POST /payout/trigger

## Security
- Read-only data permissions; scoped tokens
- Encrypted at rest & in transit
- OAuth/2FA for identity
- Strict iFrame sandboxing & CSP
