import {css} from '@pandacss/dev' 

export const HtmlForm = () => {
  return (
    <form>
      <label css={StyledLabel} htmlFor="firstName">名</label>
      <input type="text" id="firstName" name="firstName" />
      <label htmlFor="lastName">姓</label>
      <input type="text" id="lastName" name="lastName" />
      <br />
      <label htmlFor="email">メールアドレス</label>
      <input type="text" id="email" name="email" />
      <br />
      <label htmlFor="password">パスワード</label>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="8文字以上である必要があります。"
      />
      <br />
      <input type="submit" value="登録する" />
    </form>
  );
};

const StyledLabel css`
display: block
`