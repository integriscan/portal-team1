# portal-team1 — 남뀨 팀 기록 사이트 (team1.feeler.kr)

이 저장소의 `index.html`이 GitHub Pages로 team1.feeler.kr 에 그대로 올라갑니다. UI를 고치고 싶은 팀원은 브랜치에서 작업하고 PR을 올려 주세요. main에 머지되면 1~2분 뒤 사이트에 반영됩니다(그래서 main에 직접 push하지 않습니다).

## 구성

| 경로 | 무엇 |
|---|---|
| `index.html` | 사이트 전체(화면 + 자바스크립트 한 파일). 프레임워크 없음, 빌드 없음 |
| `server/functions/portal/*.ts` | 서버(Supabase Edge Function) 소스. **읽기용**입니다. 화면이 어떤 요청을 보내고 무엇을 받는지 볼 때 참고하세요 |

이 저장소에 **없는 것**: 분석 탭(관리자 전용), 관리자 비밀번호·연결 키 관련 코드, 비밀값(DB 주소, 토큰, 키). 그대로 두세요. 비밀번호나 키를 커밋하면 안 됩니다.

## 로컬에서 보기

```bash
python3 -m http.server 8080
```

브라우저에서 http://localhost:8080 을 열면 됩니다. 화면은 실제 서버(`https://hcsoctvuzjwgvxfcrwtb.supabase.co/functions/v1/portal`)에 붙어서 돌아가므로, 팀 비밀번호와 본인 계정으로 평소처럼 로그인해서 씁니다. 로컬에서 입력한 기록도 실제 서버에 저장되니 시험용 글은 `[시험]`을 붙여 주세요.

주소에 따라 프로젝트가 정해집니다(`index.html` 안 `PROJECTS`). localhost에서는 기본값이 쓰이니, 다른 팀 화면을 보려면 그 부분을 잠깐 바꿔서 확인하세요(커밋하지 않기).

## 화면 구조 (index.html)

- 위쪽: CSS. 색·간격은 `:root` 변수.
- `PROJECTS`, `API`, 문구 사전(`MSG`) → 로그인 화면(팀 비밀번호 → 이름·개인 비밀번호) → 탭.
- 탭은 `TABS` 배열 순서대로 그려집니다. 각 탭은 `renderXxx()` 함수 하나: 우리 팀, 오늘, 지난 기록, 주간, 보드, 일정, 회의록, 지출, 운영.
- 서버 호출은 `call("action", {...})` 한 함수. 액션 이름은 `server/functions/portal/index.ts`의 `if (action === "...")` 줄에서 찾을 수 있습니다.
- `el(tag, attrs, children)`로 DOM을 만듭니다. innerHTML은 쓰지 않습니다(사용자 입력이 그대로 들어가므로).

## 작업 규칙

1. 브랜치를 만들어 작업하고 PR로 올립니다. PR 설명에 어떤 화면을 어떻게 바꿨는지, 어느 기기(폰·PC)에서 확인했는지 적어 주세요.
2. 화면만 고칩니다. 서버 액션을 새로 만들어야 하면 PR 설명에 "서버에 이게 필요하다"고 적어 주세요. 서버는 따로 배포합니다.
3. 폰(375px 너비)에서 깨지지 않는지 확인합니다. 지금 사이트는 폰에서 주로 씁니다.
4. 비밀번호·키·개인정보는 코드·커밋·이슈에 넣지 않습니다.

## 반영

PR이 main에 머지되면 GitHub Pages가 자동으로 team1.feeler.kr 에 올립니다. 오더리스 사이트(portal-orderless)에는 관리자가 따로 복사합니다. `CNAME` 파일은 지우지 마세요(주소 연결용).
