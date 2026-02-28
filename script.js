

document.addEventListener('DOMContentLoaded', function () {
    
    let userName = prompt("Masukkan nama Anda untuk sambutan:", "Harfi");
    if (!userName) userName = "Harfi";
    document.getElementById('welcome-name').textContent = `Hi ${userName}, Welcome To Website`;

    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
       
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    
    const form = document.getElementById('message-form');
    const resultBox = document.getElementById('result-box');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        
        const name = document.getElementById('name').value.trim();
        const birthdate = document.getElementById('birthdate').value;
        const genderRadio = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById('message').value.trim();

        
        if (!name || !birthdate || !genderRadio || !message) {
            alert('Semua field harus diisi! Mohon periksa kembali.');
            return;
        }

       
        const currentTime = new Date().toString();
        
        document.getElementById('curr-time').textContent = currentTime;
        document.getElementById('res-name').textContent = name;
        document.getElementById('res-birth').textContent = birthdate;
        document.getElementById('res-gender').textContent = genderRadio.value;
        document.getElementById('res-pesan').textContent = message;

       
        resultBox.scrollIntoView({ behavior: 'smooth' });

      
        alert('Form berhasil dikirim dan ditampilkan! ✅');
    });

    
    document.querySelector('.logo').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});