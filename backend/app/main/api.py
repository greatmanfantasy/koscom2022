import requests
from datetime import datetime

res = requests.get(
    (
    'httpapis.data.go.kr1160100serviceGetStocDiviInfoServicegetDiviInfo'
     'serviceKey=2T%2FGSiDSGrewFLIh9g%2BwqkLUNhHFPGQ6G0wDDUddXPf%2B3jTzjBsuMAVNYITwkEKlK99%2BlItSJEU2zJi9S3eFdA%3D%3D'
     '&pageNo=1'
     '&numOfRows=1000'
     '&resultType=json'
     '&stckIssuCmpyNm=삼성전자'
    )
)
res = res.json()['response']['body']['items']['item'] # 배당내역 정보(딕셔너리) 리스트

todayDateInt = int(str(datetime.today())[10].replace('-',''))
maxDateInt = 0
stckGenrDvdnAmt = 0 # 1주당 배당금액

for item in res
    # 보통주일 경우
    if item['scrsItmsKcdNm'] == '보통주'
        # 지급된 배당건에 대해서만
        if str(item['cashDvdnPayDt']) != ''
            dateInt = int(str(item['cashDvdnPayDt'])[10].replace('-',''))
            # 가장 최근의 배당건에 대해서
            if dateInt  todayDateInt and dateInt  maxDateInt
                maxDateInt = dateInt
                stckGenrDvdnAmt = int(item['stckGenrDvdnAmt'])

# 1주당 배당금액이 담긴 stckGenrDvdnAmt 변수 활용