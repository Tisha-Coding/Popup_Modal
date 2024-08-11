let popup = document.querySelector('.popup');

let openModal = () =>
{
    popup.classList.add('popup_open');
    //jab bhi koi button par click krega toh popup_open nam ki class popup mein add ho jaegi

}

let closeModal = () =>
{
    popup.classList.remove('popup_open');
}