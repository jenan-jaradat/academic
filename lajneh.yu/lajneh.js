document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const allContents = document.querySelectorAll('.dropdown-content');
      
      // إخفاء كل القوائم المفتوحة
      allContents.forEach(c => {
        if (c !== content) {
          c.style.display = 'none';
        }
      });
  
      // تغيير حالة القائمة الحالية
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });