/**
 * [바이브코딩 웹앱 수행평가 상호평가 웹앱 - Code.gs]
 * 
 * [배포 및 사용 방법]
 * 1. 평가 결과를 저장할 '구글 스프레드시트'를 하나 만듭니다. (또는 기존 시트 사용)
 * 2. 상단 메뉴 [확장 프로그램] -> [Apps Script] 클릭
 * 3. Code.gs 파일에 이 내용을 붙여넣고, index.html 파일을 추가하여 index.html 내용을 붙여넣습니다.
 * 4. 우측 상단 [배포] -> [새 배포] 클릭
 *    - 유형: [웹 앱] 선택
 *    - 설명: 바이브코딩 상호평가 앱
 *    - 다음 사용자로 실행: [나]
 *    - 액세스 권한: [모든 사용자] (또는 조직 내 사용자)
 * 5. 생성된 '웹 앱 URL'을 학생들에게 공유하면 끝!
 */

// 1. 웹앱 접속 시 화면 표시
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('바이브코딩 수행평가 상호평가')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

// 2. 반별 학생/작품 데이터 반환 (엑셀 데이터 기반 기본 내장)
function getStudentsData() {
  return {
    "1-5": [
      { "no": 1, "title": "학습 도우미 앱", "url": "https://script.google.com/macros/s/AKfycbymPPAA4BMNy0okQZDkU72dn69MLonLNXrLgdh2XXGc19a89VJIB66M6jl9_3rkhcHNTA/exec" },
      { "no": 2, "title": "성적 관리 앱", "url": "https://script.google.com/macros/s/AKfycbzCG1kUd_bhqX6KvlCorw9xgnIqSeJzG1KejgfEybACTCo3eKtRwn1m7fWMxQt2dfKR/exec" },
      { "no": 3, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbyWY1LBSBVIQU5dtFiI9p8XHZQ1PqQz3xLm_4SNs7ikBzACkXzvo9Pt4z7c34GTBo8C/exec" },
      { "no": 4, "title": "퀴즈/학습 앱", "url": "https://script.google.com/macros/s/AKfycbwSLnu7i4E8-UUFHx0svlE1Jz9sYMLjAyLNrtYdPRcCB8tcpcNKUGVb3fHuP2Flx_J4/exec" },
      { "no": 5, "title": "학습 플래너", "url": "https://script.google.com/macros/s/AKfycbzTxKZWXOgJe5xj4PuCL0B4Qkd1BNFaJMGndtYfQE1TkX5pbhCv2q0sZgMEYhuHV22X7A/exec" },
      { "no": 6, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbxhPEXDKNdJOEw6wQBNLr0_UAxLm-fCL_aYsz4yeYJn5QDMb0UfGJWZbRoZRKPdFRQL/exec" },
      { "no": 7, "title": "메모/일정 관리 앱", "url": "https://script.google.com/macros/s/AKfycbwsqos6Lt25BydNv5TbNHeC_XQur5u-0BdnnKjFRHz-i1TTEs0xd3h1kFCuVwus8JGI/exec" },
      { "no": 8, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbzKOLq4vaPRkRiF5NpA9QVr_PzPIRjrK9g3jc-C5Eb-hRBBNLNMjDIY6E3MVuqBaYpo/exec" },
      { "no": 9, "title": "학교생활 도우미", "url": "https://script.google.com/macros/s/AKfycbzgbNqcDgsyUSS6OW5lOUnjjKtwUwA9Zrkx02kyqKL13sjnMnG9Jsji6E_XRtgukKkW/exec" },
      { "no": 10, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbypwxw7GBxKy0pPBNI3dgfZ1dJpzcE_eV5q4UlzppUsOojGOWGBoCgtvDWPIFSarzw7/exec" },
      { "no": 11, "title": "MBTI 맞춤 학습 플래너", "url": "https://script.google.com/macros/s/AKfycbw_hPE6qlwirz3KGOX8sWiaE9rk5rpL2AtTQ9TxPY_s7oUjrHDsI7K40D3Yj9VLts4r/exec" },
      { "no": 12, "title": "독서 기록 앱", "url": "https://script.google.com/macros/s/AKfycbxGR5Ri8ZCrCczc5u_PkFI5PmBRa4ImEEMP3roYi-NFLbuhqRrYkkYqDlt9xZ8l5Tau/exec" },
      { "no": 13, "title": "할 일 관리 앱", "url": "https://script.google.com/macros/s/AKfycby6VV777Gi-jyqssUlQgA5xhvWgukEHUrNFyUy27oiKz__fYQDJ1_NCoFzr0AsiyNmP/exec" },
      { "no": 14, "title": "설문/앱 (점검중)", "url": "https://script.google.com/macros/s/AKfycby8rhhanJgb6Wvzkiy-6O5s_BHXvdSycZjfQ7yhkbgq76sdhLvbmQUMSv41s6y8lv_O/exec" },
      { "no": 15, "title": "개인 드라이브 연동 앱", "url": "https://script.google.com/macros/s/AKfycbyzRdJNrACvTPSYoqDnUFsqUqT2glUOCZd-utb4C9v5wokSkWrCETbnVsEhd_BgJ9kz/exec" },
      { "no": 16, "title": "설문/기록 앱", "url": "https://script.google.com/macros/s/AKfycbwbJgBLRGhlahCH5OVL5t-v6ZFbX7Zc17ZFEusbOJnZDXlq-ZBf0ckRvcrX12ABP6IwiQ/exec" },
      { "no": 17, "title": "생활안전 분류 도우미", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbzUqo54evwrdiSBrFzP90uTIEyE3m0AmKViD23B6jmPpsKfjrKPmQzfVVc0I7uid22Vsg/exec" },
      { "no": 18, "title": "취미/라이프 기록 앱", "url": "https://script.google.com/macros/s/AKfycbwvY3NmBuiXPduyMILC_BrjDbobbYr_X5oB5GtJQLeF4s6hfj-D5c_GDEzIH9sSCCRZiQ/exec" },
      { "no": 19, "title": "학습 체크리스트", "url": "https://script.google.com/macros/s/AKfycbyry-SRd2R_y9zQhpIguK7MkkKfZhYNr0HGGAc63gl-TuwCsWOhtBsbs7hfANQYtHg/exec" },
      { "no": 20, "title": "진로 탐색 앱", "url": "https://script.google.com/macros/s/AKfycbyeUUd9TG43CzmVlS6rffr0iHeBS45rfJfl89p7axeCr71rTx38cR5NAcGNLwDTobQ5rw/exec" },
      { "no": 21, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycby7lj3-dL3MkizeZwTh0DizWcu38ig3Sh0lH9BbfLSgNgNKDuD21HoP7sNPPHF8_QfdxA/exec" }
    ],
    "1-6": [
      { "no": 2, "title": "학습 도우미 앱", "url": "https://script.google.com/macros/s/AKfycbxQ0PJn64tYoo2QR544qxsaxgKgDo_UeVzo9mcOL98A3Ze_ywRj052s4HeSlMmhtHNxWQ/exec" },
      { "no": 3, "title": "퀴즈/학습 앱", "url": "https://script.google.com/macros/s/AKfycbzxAMoJvJpl-tHE38Q6trcVMpYh_CMEOemNWwpaqlY6TSowE-jHQMWoh-1cc0619VYzIA/exec" },
      { "no": 4, "title": "메모/일정 관리 앱", "url": "https://script.google.com/macros/s/AKfycbxC0MGy5Qf5uoDT1Y4bpb7YWfI2d51SHYL9KsEmvmgc0HghZz2R8ZkSCO_0NEDTUW8S/exec" },
      { "no": 5, "title": "학교생활 도우미", "url": "https://script.google.com/macros/s/AKfycbzgloMSZE9rFVxeuBB1PsupuIVSs1q36ae3G9ptgYiMfDQsMEgiGOvoGDkEWndfJ3knrw/exec" },
      { "no": 6, "title": "취미/라이프 기록 앱", "url": "https://script.google.com/macros/s/AKfycbzKplojGiiKEWthqJKjRIF_1tn5EXU0pjiVO2dAQcXpeTkbf0XGi-quJBD8IhbLzAKp/exec" },
      { "no": 7, "title": "할 일 관리 앱", "url": "https://script.google.com/macros/s/AKfycby7pd5skZ5EYtFZN9IWKTlMUKJr-UiGoRBBaD5ANU2EK_hHtI5aC2KlrE-vFkcmC1DQ/exec" },
      { "no": 8, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbydHLxhGpeIRnfqeaAS1fNnHSWXU1iDPqwiqvdyV51ACzClixzPGCbInzO5w1OtRC9f/exec" },
      { "no": 9, "title": "독서 기록 앱", "url": "https://script.google.com/macros/s/AKfycbxNVrMNN0y6yoDCSiPB36t2dEiZLxwEe-KAUFLjDE7zFdD5w1K8y0G4cnfUnv39JPv4qg/exec" },
      { "no": 10, "title": "진로 탐색 앱", "url": "https://script.google.com/macros/s/AKfycbyJ5sdHJWXA9CdpZj7dsardW5tXkjZhhZK7GtTlpk1WDQ9rftDAa2Qc8RoMuiqc7FrG/exec" },
      { "no": 11, "title": "학습 체크리스트", "url": "https://script.google.com/macros/s/AKfycby6hbzFXZPUF0fMRohli0ZF5joUwAyAD9RPR-VmTmVU-ZIrRNu7BPYgA2DEQ9OntExi/exec" },
      { "no": 12, "title": "설문/기록 앱", "url": "https://script.google.com/macros/s/AKfycbxrSelLIFPNEo40Sf-TUluFepCRLljB9x4yF6SPXS2JbtKl1Wo39WDf72Ez7QmgHf2l/exec" },
      { "no": 13, "title": "집중력 진단기", "url": "https://script.google.com/macros/s/AKfycbzE0QBgjNnCN8BiTTIALjVjR1qqYx8hrPxX7DGnBpQv4c3fGVvi61iyfjZU8UJPTF0EoQ/exec" },
      { "no": 14, "title": "우리 반 발표자 뽑기", "url": "https://script.google.com/macros/s/AKfycbxaXiIjUUlNokHG-ji3VGB84yOPyzTG2XJM6JGt4IiUMkZMwgO4bLTWZEjTA3sHbRQHFQ/exec" },
      { "no": 15, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbzdhjpQV8ha3XvpqKO4kDemQ892fN8CWWEEaoA8Bs9gKz9ysvD7tA51ii5a2_S3WH2P3A/exec" },
      { "no": 16, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbwTsquWb3lurYqcaHg-e31KNH85jqYOX-WDcj_iuXumHX1RePw3tX_qYDtDeAa6jo0FPQ/exec" },
      { "no": 17, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbyBpqBlFpCvoL_W54dwtRkIAxvdJcpUAk22nJp4ARf12iUcd6k0OXoMg3wVAtgRyJGE/exec" },
      { "no": 18, "title": "학습 플래너", "url": "https://script.google.com/macros/s/AKfycbzScAJwqzjXBLchs6YDcmgcrBCwGM9nK8gVnhLTXMoStT4mNmz653M-dhXbo-o2Rh3T/exec" },
      { "no": 19, "title": "아직 안 늦음 - 벼락치기 분석기", "url": "https://script.google.com/macros/s/AKfycbxOqX6G9CRU5KSv-TYyieIq5cvuBrJH2gdEtjI4Qfg44juNAoLiOqxjWqzmsTntbwgr/exec" },
      { "no": 20, "title": "소비 성향 MBTI 테스트", "url": "https://script.google.com/macros/s/AKfycbxPTuZoTCtq3Zie5v7CTHlfmHGSn0KAHQzvq9NwSwHbBaZfS3atp0bBPrSFdkE39f8-aA/exec" }
    ],
    "1-7": [
      { "no": 1, "title": "소비 성향 MBTI 테스트", "url": "https://script.google.com/macros/s/AKfycbz_Dd9yEIcqJ-b9U4Y8bWro0rHLBGy8-TzSlz4lpCaOqkMhqPjKEhbpGHFhhjzQXthsKg/exec" },
      { "no": 2, "title": "넷플릭스 인생작 아카이브", "url": "https://script.google.com/macros/s/AKfycbw1W-4aCzQuDBMiNlV2pMMK4l5U_4XaCu54RWnmpz1c-UkQXxUevD4FWMAQZxjKWhg/exec" },
      { "no": 3, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbxhu9RI1eWGUrvkYyojCc6yUfTRQb-V58Oriu3vJdSTmcVsZvUciR6JHVkXzM60Rvx3/exec" },
      { "no": 4, "title": "스마트 바이탈 기록지", "url": "https://script.google.com/macros/s/AKfycbyA7c5teHHun_y4UQLfFjEy9xR6cuo8PmukCyZN4k9TZjcPu4Zls536g0mjHfTn5Cir_w/exec" },
      { "no": 5, "title": "수분 섭취량 계산기", "url": "https://script.google.com/macros/s/AKfycbzfVqy01Sf6fRqRlVUoARJ8V56oQZHv76zNMCclN4Ekyxl3nWFZ8Nhtu31e_BHhqRK1uA/exec" },
      { "no": 6, "title": "학습 도우미 앱", "url": "https://script.google.com/macros/s/AKfycbwcO81j3D7xxmq4JE32oAcbZN0KX9C87RNsoyVdjKtRYeeRkTFVAzQTHtGc65kz7ifT/exec" },
      { "no": 7, "title": "퀴즈/학습 앱", "url": "https://script.google.com/macros/s/AKfycbxZraz5bxoEeUo_xyOXz1MQHpISOhNZp43jV0Gjs6XUWRnO2K0HGRCcZa_6IQEst7Xu8g/exec" },
      { "no": 8, "title": "앱 오류 (점검필요)", "url": "https://script.google.com/macros/s/AKfycbxZQD8v-pLl9ef_M_oFhwreOvCgFyy8JI5ceqJ8loCAyGGL1DGYyhTlKayLSpwKoWRs/exec" },
      { "no": 9, "title": "앱 오류 (점검필요)", "url": "https://script.google.com/macros/s/AKfycbxRUcyDM3UedT3klooN0BHA3eRA27Mpo2HbQd3vjj5cendPLI2dNuwm0iepaR7QUsif0Q/exec" },
      { "no": 10, "title": "메모/일정 관리 앱", "url": "https://script.google.com/macros/s/AKfycbz3667wzPFpsZo1o80gX2RIRX1usnQ9I6HbWN_hgcldqq0Fwh0xOxUS1LsrIX-PKU_Z/exec" },
      { "no": 11, "title": "탄소 절약 식단", "url": "https://script.google.com/macros/s/AKfycbxivxm9cvbrwfvJ82AsMn8lhaqfH09ZWNv2T0-m630QoTI7yzwvqcOu50GzYTnBq3PxVw/exec" },
      { "no": 12, "title": "글로벌 매너/금기 사전", "url": "https://script.google.com/macros/s/AKfycbzASQRUzVCKBo97W5sHsPWQibxaHW5Emq16MI332I2TgQFN_mYmAh3XtoZr1kI4XImN2Q/exec" },
      { "no": 13, "title": "마음을 전하는 칭찬 우체통", "url": "https://script.google.com/macros/s/AKfycbzmZmm9tlD8O2QGDe96fJpSuS5oKye2kRWygPCSWz4_S3jW_KYaw78h-9X4e0Mru5FO/exec" },
      { "no": 14, "title": "진로 탐색 앱", "url": "https://script.google.com/macros/s/AKfycbzrHVXDT2EnmHC3lf9u21Ns4ZAxo1dSPujpsOwROpoHrDsA8ECZuQ8nP2L0XUGnaIURTQ/exec" },
      { "no": 15, "title": "학교생활 도우미", "url": "https://script.google.com/macros/s/AKfycbxrTzr8GF5Pnw7KPXSifDn_o9fEfdZ81t2_5SMV1dPYyDSimp71LxGbVv60T4gNLBKR/exec" },
      { "no": 16, "title": "따끈따끈 모카 스터디", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbwX504xAuhLhpc5YAzu-2awS4N-Qkoam0t3IlEK8vplmuyVWPMaM-Wqp_kjfGMyj6oz/exec" },
      { "no": 17, "title": "취미/라이프 기록 앱", "url": "https://script.google.com/macros/s/AKfycbx4QtkySsRbSbZjlrgPrqZOiZ526-lIcTGEqFm89OXDxpdE1OycpDE01TvOo32CL-aT/exec" },
      { "no": 18, "title": "오늘 뭐 먹지? - 메뉴 추천", "url": "https://script.google.com/macros/s/AKfycbwPRSx4YDw_UUpuVp3cq9TYbPLU5ofmY0ai4juIZ2bUh7loiJhPz9yWCiH8osX52A-g/exec" },
      { "no": 19, "title": "데일리 탄소 진단", "url": "https://script.google.com/macros/s/AKfycbxqF2ubHY5VsSMKAJmBkM9CAubzHHqdx08IBArdt13RgIw_7tGhKlYj3ODN-3CMECYT/exec" },
      { "no": 20, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbzuLZwaX6fXjBAlV2B5ODDMx3WL5LZ3gU39lz1pPgCN-l_8q_mpO56djxFqahrrBG5x/exec" },
      { "no": 21, "title": "숲속 작은 도서관", "url": "https://script.google.com/macros/s/AKfycbx7Ykr5UhpDC9GXPI5AjphuTSc1mRVjOzQkRHIvcBmo0e0i-qtSpzpW3926z_WDMX4O/exec" }
    ],
    "1-8": [
      { "no": 1, "title": "할 일 관리 앱", "url": "https://script.google.com/macros/s/AKfycbzLZKuiO1oslmOlNbIAJJmRUc4Vy5gk_ucKNEsj3qinwKnPlsBJyNboqKda-nBI3eaB6A/exec" },
      { "no": 2, "title": "독서 기록 앱", "url": "https://script.google.com/macros/s/AKfycbz6bz0kiHYYTs-FXqSexT4yuKMpfRMOeQWm8Wk6j2m39yY6qNcZQpxA5vpvFNITKSr_Uw/exec" },
      { "no": 3, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbxpQLHxtdOwcNOiu4gLuQQCraJWzDsIP0cHC18FmVu5mfu3r60cFwJrxFCxV4tqkHZM/exec" },
      { "no": 4, "title": "학습 도우미 앱", "url": "https://script.google.com/macros/s/AKfycbxZLBhkEWBQKP1cHUr_6R7evEmslRXKmdldPTCyyIR7jZgIRBaKKrHOlCPV9Qo7Y0qr/exec" },
      { "no": 5, "title": "퀴즈/학습 앱", "url": "https://script.google.com/macros/s/AKfycbwN6WnLIFdnhsZaZD4u6WkuOlkA0RuAV-bq7wLboHEaDgObHEz7V33toyho95awa_rg/exec" },
      { "no": 6, "title": "메모/일정 관리 앱", "url": "https://script.google.com/macros/s/AKfycbzRkPknt6i5laLNyqwRf6iMyp3jA4fI5vyluwnReoV1G4buNnIkgGVREftB0sXJQoiyZg/exec" },
      { "no": 7, "title": "학교생활 도우미", "url": "https://script.google.com/macros/s/AKfycbyWpgVaPJTlCPsq_5nLGuzRiT6Jb9hgomQhujFnozXH7Ot9nbJ2-24zqhkqaEZETkfeVg/exec" },
      { "no": 8, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbxckRU-zw7RwSHGrVdcnEKP6OWq7neNJIC2frnjydv1NbCfg4QY_nV3SRf1HwISi00irA/exec" },
      { "no": 9, "title": "탄소 발자국 계산기", "url": "https://script.google.com/macros/s/AKfycbzFz8sjtmD5DNGCwyMO_vF6s_Gqyp2mCQJnDYAexJuPTFaFYBuUBE633ib4IKoS-66WMg/exec" },
      { "no": 10, "title": "취미/라이프 기록 앱", "url": "https://script.google.com/macros/s/AKfycbymppGReTXHvNAmP74RM-V657WTmtVd4gEX7dOA8G1ZRCwZ4Qc-CNEt4QKYKwfMBn7kYQ/exec" },
      { "no": 11, "title": "진로 탐색 앱", "url": "https://script.google.com/macros/s/AKfycbyDAS40CDiz3sYl-VJ5vC3Wd7t7t8HCL5kSLgIUTZe5EvNSuuXwbGmZXg5TYqVE2Wrv/exec" },
      { "no": 12, "title": "하루 물 섭취량 체크 가이드", "url": "https://script.google.com/macros/s/AKfycbzXw02TR6piZH4C3dlHUKFeWCWGtQDZYH4geLUlQPm2QI6UXZ1VsYDXgO7LWqBW2kkrpg/exec" },
      { "no": 13, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbwYpatNAeiAp50-_7-HaQ9JTp_cseurvnHR_v8eRKGuNuzENslKMkExOT7lsal14J-jHA/exec" },
      { "no": 14, "title": "할 일 관리 앱", "url": "https://script.google.com/macros/s/AKfycbywmTl3HZvpbw6mkrcjmNFq_Qs2rlZVcvC_dBFWrfUImLqrCZRXWH8qGVavGrywQ7X8/exec" },
      { "no": 15, "title": "학습 체크리스트", "url": "https://script.google.com/macros/s/AKfycbxYO_1w9q3lc3xf_8q_ZaKJA8Phjvut1nwH21R_1BQR62dLvpqqraknvTK0w8ERXDLc/exec" },
      { "no": 16, "title": "설문/기록 앱", "url": "https://script.google.com/macros/s/AKfycbzYrVtR2APjIr1R8C0scOjR_MzsuOvBxfYFQwvWm7RkgQckKsJQ__08br7Gk4t4_hpuWg/exec" },
      { "no": 17, "title": "독서 기록 앱", "url": "https://script.google.com/macros/s/AKfycbzcTGSYs-kZU1HvAuVvZUIBaXdXZAqOfoqv3u7VoU6KhnEJx0IEXvycYnVQPbdPT48/exec" },
      { "no": 18, "title": "학습 플래너", "url": "https://script.google.com/macros/s/AKfycbxu8oMNu-Aoaix_j0II_bBiX9V4OjlzRzYFRRLK40Cqy6nkL81D93YXJ4C1KRribp5GKA/exec" },
      { "no": 19, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbxJSP-VXhwPmaEBKRCha0_Hh7QjULNtzy4ZFrCd_-CrhBqxW71lbWY4CqBMsR53aDcr/exec" },
      { "no": 20, "title": "취미/라이프 기록 앱", "url": "https://script.google.com/macros/s/AKfycbwpYoQPVrF4fHtZIpvhzfATEAX0QML4QAvRDspDqXFme2Z2ZSFCp46FiVQJTJAl4mEa5w/exec" },
      { "no": 21, "title": "진로 탐색 앱", "url": "https://script.google.com/macros/s/AKfycby_djAtHztHctoK60YBR_HBVKYafQa_Cm8fjIsUWJVODZBljbtrxKiWDayebnLTVp2Yog/exec" }
    ],
    "1-9": [
      { "no": 1, "title": "학습 도우미 앱", "url": "https://script.google.com/macros/s/AKfycby7dijeXpO7V_UKMI3ugCEIBGpP1mBttoIVSq83VHFdwcPIh_iR5rEryV897_VELwyYIg/exec" },
      { "no": 2, "title": "학습 도우미 앱", "url": "https://script.google.com/macros/s/AKfycby7dijeXpO7V_UKMI3ugCEIBGpP1mBttoIVSq83VHFdwcPIh_iR5rEryV897_VELwyYIg/exec" },
      { "no": 3, "title": "퀴즈/학습 앱", "url": "https://script.google.com/macros/s/AKfycby1gjTdBwdOLS4BpVrgwM0nLVc21QI7HmoznS6gXGfPTwbRQF_eCdO3xioDUS6F9Yb3/exec" },
      { "no": 4, "title": "학생 건강 및 운동 관리 앱", "url": "https://script.google.com/macros/s/AKfycbztIDMidjlEZ21ZKKxCbWOa38dzWycnhfoSYuvrCKgqE9k2YrZenc1vqJeqxFqUpHdvPw/exec" },
      { "no": 5, "title": "청소년 수면 분석기", "url": "https://script.google.com/macros/s/AKfycbxLAJok2wdyK_jS5l_fj_9y1GcxNsvRiEfAE_N8ILTvWgg2kv2S1Dp-11-RuRt02SGZ/exec" },
      { "no": 6, "title": "메모/일정 관리 앱", "url": "https://script.google.com/macros/s/AKfycbwiLvBmecVZYBQqo7Cq8oJQR6dWuWkarxCAHc_hwhtfHf8wnrOBwOo0TPldV9wD72c/exec" },
      { "no": 7, "title": "BMI 측정기 대시보드", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycbyWAnyoJW6PAI_SospngVTnAJZ_gSgRT235_UBPHC8Mdhruv_U69A9yJv6u9O6hE4o5/exec" },
      { "no": 8, "title": "HealthPass - 스마트 보건실 출입증", "url": "https://script.google.com/macros/s/AKfycbysTSbEbDcSVE24TnvE5z3PfRpx3zg97Vo2_pPPxB8UP89h3uYfvrLZhQAXnxOuucZg/exec" },
      { "no": 9, "title": "앱 오류 (404 Not Found)", "url": "https://script.google.com/macros/s/AKfycby4mrQOmpuZO6J9vQNeMLm6Mj-3_mZLX34fkoHaFX40wMGrfBC4EPOllR1EzxIpX9A9/exec" },
      { "no": 10, "title": "건강기록 다마고치", "url": "https://script.google.com/macros/s/AKfycby9JDMo7N7rlm-UZKcInSh92tat99S958qzP0gAyJZTVfVJ6fNvG0mu7_l6di_cD9sJ/exec" },
      { "no": 11, "title": "학교생활 도우미", "url": "https://script.google.com/macros/s/AKfycbyi_Q-S4z6dhAgyDoQz6AkLElDjznt_5QAMgAFh5QncdBi9RlvRxziaQZU1vBZF0OCv/exec" },
      { "no": 12, "title": "오늘의 감정 피드", "url": "https://script.google.com/macros/s/AKfycbxULuh0S8nvi0g1AicgtLjMJDOTgQpJnOtsJcY6AJTMUUxPzUYxD4YlP_ojJF-UcR4/exec" },
      { "no": 13, "title": "취미/라이프 기록 앱", "url": "https://script.google.com/macros/s/AKfycbxPpH10RlZDkd4-CKzFcVYLNIXU9RB_WGt8NfhU-JD-LjC0O1pM_1Y8ozyiX6wO96EJ/exec" },
      { "no": 14, "title": "진로 탐색 앱", "url": "https://script.google.com/macros/s/AKfycbydor9o7xopGXZmo5zuGNrV-kOPzOVfzGrcvxVnG9gJb5UPQiK40gPaJa8wKgBs4-U1CA/exec" },
      { "no": 15, "title": "학습 체크리스트", "url": "https://script.google.com/macros/s/AKfycbzwM7tEpY8WYbRU43Z8JVM5bIK4paiCAFthnUGuJCMLxsQjD8bQuhwcwim9ItCXV-BP8g/exec" },
      { "no": 16, "title": "설문/기록 앱", "url": "https://script.google.com/macros/s/AKfycbyISKq9Te4GebM6PNtWoUVpB7rgmNh-a7BQCeeunYaXmY6MN0M7FSmIcOt6QzImDViO/exec" },
      { "no": 17, "title": "독서 기록 앱", "url": "https://script.google.com/macros/s/AKfycby3-MPE52zIm1URDFwkUMkkQnLkNjucpP_RDO_IfNYVBy5zPjfUETjYFifoff0-Sd0/exec" },
      { "no": 18, "title": "교육청 계정 전용 앱", "url": "https://script.google.com/a/macros/dge.go.kr/s/AKfycby_tOPNa-iXhKtXums5M2Qt6qI8Tv0wG3rIXDo81Foz-bmFdDB_3hHTIRmFkz3om0Vk6Q/exec" },
      { "no": 19, "title": "할 일 관리 앱", "url": "https://script.google.com/macros/s/AKfycbyo23RZaogBysKeXemiiOnG9yZdUiTq-JXPTe31p7ui6hyJhgL9Qf5qp3DMs81TGDFk6w/exec" },
      { "no": 20, "title": "명탐정 물리 사건 수첩", "url": "https://script.google.com/macros/s/AKfycbyoACAf97i_2blxHcUzAgGB2__fXioNLucQaSoVMospktvm5BKrll74pgvpTSCOipv1/exec" },
      { "no": 21, "title": "앱 오류 (점검필요)", "url": "https://script.google.com/macros/s/AKfycbwGpmbuSWFEL1Ez3QIZcXWgHmtcmuUmZj431CfU9dKzWtV_O345MOM88G7OIQ98pW0v/exec" }
    ]
  };
}

// 3. 설문 평가 제출 처리 (스프레드시트에 자동 기록)
function submitEvaluation(formData) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('평가결과');
    
    // '평가결과' 시트가 없으면 자동 생성 및 헤더 설정
    if (!sheet) {
      sheet = ss.insertSheet('평가결과');
      const headers = [
        '제출일시', '평가자', '대상학급', '순번', '작품주제', '웹앱URL',
        '문제 해결 적합성(1~3)', '기능 구현 완성도(1~3)', '창의성 및 아이디어(1~3)',
        '사용 편의성(1~3)', 'UI/UX디자인(1~3)', '총점(15점)', '종합 피드백'
      ];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setBackground('#1e40af').setFontColor('#ffffff').setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    
    const timestamp = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
    const score1 = Number(formData.score1) || 0;
    const score2 = Number(formData.score2) || 0;
    const score3 = Number(formData.score3) || 0;
    const score4 = Number(formData.score4) || 0;
    const score5 = Number(formData.score5) || 0;
    const total = score1 + score2 + score3 + score4 + score5;
    
    const row = [
      timestamp,
      formData.evaluator || '',
      formData.targetClass || '',
      formData.targetNo || '',
      formData.targetTitle || '',
      formData.targetUrl || '',
      score1,
      score2,
      score3,
      score4,
      score5,
      total,
      formData.feedback || ''
    ];
    
    sheet.appendRow(row);
    SpreadsheetApp.flush(); // 스프레드시트에 즉시 기록 반영 강제
    return { success: true, message: '평가가 성공적으로 제출되었습니다!' };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}

// 4. 외부 웹(Netlify 등)에서 fetch POST 요청 수신 처리
function doPost(e) {
  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (ex) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    const result = submitEvaluation(data);
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


// 외부 웹(Netlify)에서 제출된 데이터를 받아 구글 시트에 저장하는 필수 함수
function doPost(e) {
  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (ex) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    const result = submitEvaluation(data);
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}