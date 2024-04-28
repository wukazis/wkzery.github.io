// script.js

function checkLogin(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'wukazi' && password === 'wyz20031024') {
    window.location.href = '2.html'; // 如果用户名和密码匹配，跳转至2.html
  } else {
    alert('用户名或密码错误，请重试！'); // 如果用户名或密码不匹配，弹出提示
  }
}
