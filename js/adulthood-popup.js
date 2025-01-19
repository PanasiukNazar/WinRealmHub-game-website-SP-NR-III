const verificationPopup = document.querySelector('.popup-overlay'),
    ageButton = document.querySelectorAll('.age-button');

verificationPopup.classList.add('show');

if (localStorage.getItem('hideVerifyPopup', true)) {
    verificationPopup.classList.add('hidden');
}

ageButton.forEach((button) => {
    button.addEventListener('click', () => {
        verificationPopup.classList.remove('show');
        verificationPopup.classList.add('hidden');
        localStorage.setItem('hideVerifyPopup', true);

        //if button has acceptBtn id
        if (button.id == 'acceptBtn') {
            //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
            document.cookie =
                'cookieBy= codinglab; max-age=' + 60 * 60 * 24 * 30;
        } else {
            alert('Vennligst bekreft at du er over 18 år gammel');
        }
    });
});
