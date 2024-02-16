document.getElementById('otp-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const input1 = document.getElementById('otp-input-1');
    const input2 = document.getElementById('otp-input-2');
    const input3 = document.getElementById('otp-input-3');
    const input4 = document.getElementById('otp-input-4');
 
    const otp = input1.value + input2.value + input3.value + input4.value ;
  
    if (otp.length === 4) {
      document.getElementById('message').textContent = 'OTP verified successfully!';
    } else {
      document.getElementById('message').textContent = 'Invalid OTP';
    }
  });
  
  document.getElementById('otp-input-1').addEventListener('keyup', function(event) {
    if (event.key === 'Tab' || event.key === 'Enter') {
      // Move to the next input field
      const nextInput = document.getElementById('otp-input-2');
      nextInput.focus();
      nextInput.select();
    }
  });
  
  document.getElementById('otp-input-2').addEventListener('keyup', function(event) {
    if (event.key === 'Tab' || event.key === 'Enter') {
      // Move to the next input field
      const nextInput = document.getElementById('otp-input-3');
      nextInput.focus();
      nextInput.select();
    }
  });
  
  document.getElementById('otp-input-3').addEventListener('keyup', function(event) {
    if (event.key === 'Tab' || event.key === 'Enter') {
      // Move to the next input field
      const nextInput = document.getElementById('otp-input-4');
      nextInput.focus();
      nextInput.select();
    }
  });
  
  document.getElementById('otp-input-4').addEventListener('keyup', function(event) {
    if (event.key === 'Tab' || event.key === 'Enter') {
      // Move to the next input field
      const nextInput = document.getElementById('otp-input-5');
      nextInput.focus();
      nextInput.select();
    }
  });
  
