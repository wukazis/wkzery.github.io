<script>
function checkPassword() {
      var password = document.getElementById("password").value;
      if (password === "wukazi") {
        var apiKey = "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";
        document.getElementById("message").innerText = "密码正确！API密钥已添加：" + apiKey;
      } else {
        document.getElementById("message").innerText = "密码错误，请重新输入！";
      }
    }
      </script>
