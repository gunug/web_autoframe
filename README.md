# web_autoframe

AutoFrame(안드로이드 디지털 액자 앱) 랜딩 페이지.

순수 HTML / CSS / JS. 빌드 도구·프레임워크 없음.

## 구조

```
index.html      랜딩 페이지 (히어로, 기능, 사용법, 가격, FAQ)
css/style.css   스타일 (라이트/다크 테마, 반응형)
js/main.js      테마 토글, 스크롤 리빌, 히어로 슬라이드쇼, FAQ
assets/         로고·OG 이미지
```

## 실행

파일을 그대로 열거나, 로컬 서버로:

```bash
python -m http.server 8000
# http://localhost:8000
```

## 배포

정적 호스팅(GitHub Pages, Cloudflare Pages 등)에 루트 그대로 올리면 됩니다.

## 앱

- Google Play: `com.onethelab.autoframe`
