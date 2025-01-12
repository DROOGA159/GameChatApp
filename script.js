```javascript
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messages = document.getElementById('messages');

    if (messageInput.value.trim() !== "") {
        messages.value += "أنت: " + messageInput.value + "\n";
        messageInput.value = ""; // مسح حقل الإدخال بعد الإرسال
    }
}
```