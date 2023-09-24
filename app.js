const body = document.querySelector('body');

const responsiveMenu = document.querySelector('#responsive_menu');

const header = document.querySelector('#header');
const headerLogo = document.querySelector('#header_logo');
const nav = document.querySelector('#nav');
const navLinks = document.querySelectorAll('.header_item');
const menuButton = document.querySelector('#responsive_menu_button');

const firstBlock = document.querySelector('#first_block');
const firstBlockContent = document.querySelector('#first_block_content');
const firstBlockHeading = document.querySelector('#first_block_heading');
const firstBlockParagraph = document.querySelector('#first_block_paragraph');
const firstBlockButton = document.querySelector('#first_block_button');
const firstBlockImage = document.querySelector('#first_block_main_image');
const firstBlockCustomersContainer = document.querySelector('#first_block_customers_container');

const secondBlock = document.querySelector('#second_block');
const secondBlockContent = document.querySelector('#second_block_content');
const secondBlockImagesContainer = document.querySelector('#second_block_images_container');
const secondBlockSubHeading = document.querySelector('#second_block_sub_heading');
const secondBlockFirstImage = document.querySelector('#second_block_first_image');
const secondBlockSecondImage = document.querySelector('#second_block_second_image');
const secondBlockHeading = document.querySelector('#second_block_heading');
const secondBlockParagraph = document.querySelector('#second_block_paragraph');

const thirdBlock = document.querySelector('#third_block');
const thirdBlockTabControls = document.querySelectorAll('.tab_control');
const thirdBlockTabControlsContainer = document.querySelector('#third_block_tab_controls_container');
const thirdBlockContentItems = document.querySelectorAll('.third_block_content_item');
const thirdBlockHeading = document.querySelector('#third_block_heading');
const thirdBlockCards = document.querySelectorAll('.third_block_card');

const fourthBlock = document.querySelector('#fourth_block');
const fourthBlockSubHeading = document.querySelector('#fourth_block_sub_heading');
const fourthBlockHeading = document.querySelector('#fourt_block_heading');
const fourthBlockParagraph = document.querySelector('#fourth_block_paragraph');
const fourthBlockLists = document.querySelector('#fourth_block_lists_container');
const fourthBlockImage = document.querySelector('#fourth_block_image');

const decorationCircle = document.querySelector('#decoration_circle');
const decorationArrowRight = document.querySelector('#decoration_arrow_right');
const decorationArrowLeft = document.querySelector('#decoration_arrow_left');
const decorationArrowTop = document.querySelector('#decoration_arrow_top');
const decorationArrowBottom = document.querySelector('#decoration_arrow_bottom');

const fifthBlock = document.querySelector('#fifth_block');
const fifthBlockSubHeading = document.querySelector('#fifth_block_sub_heading');
const fifthBlockHeading = document.querySelector('#fifth_block_heading');
const fifthBlockParagraph = document.querySelector('#fifth_block_paragraph');
const fifthBlockLists = document.querySelector('#fifth_block_lists_container');
const fifthBlockImage = document.querySelector('#fifth_block_image');

const sixthBlockHeading = document.querySelector('#sixth_block_heading');
const sixthBlockButton = document.querySelector('#sixth_block_button');
const sixthBlockInput = document.querySelector('#sixth_block_input');
const positiveAlert = document.querySelector('#sixth_block_input_positive_alert');
const negativeAlert = document.querySelector('#sixth_block_input_negative_alert');
const neutralAlert = document.querySelector('#sixth_block_input_neutral_alert');

window.addEventListener('load', addAnimationsForFirstBlockElements);

window.addEventListener('scroll', addAnimationsOnScrolling);

document.addEventListener('click', tabsLogic);

menuButton.addEventListener('click', hideAndShowModalWindow);

sixthBlockButton.addEventListener('click', enterYourEMailLogic)

hideAndShowMenuButton ()
mediaQuerie450 ()

window.addEventListener('resize', () => {
    hideAndShowMenuButton()
    mediaQuerie450 ()
});



function addAnimationsForFirstBlockElements () {
    headerLogo.classList.add('header_logo_animation');
    for (everyLink of navLinks) {
        everyLink.classList.add('header_item_animation');
    }
    firstBlockHeading.classList.add('first_block_heading_animation');
    firstBlockParagraph.classList.add('first_block_paragraph_animation');
    firstBlockButton.classList.add('first_block_button_animation');
    firstBlockImage.classList.add('first_block_main_image_animation');
}   
function addAnimationsOnScrolling () {
    let scrollTop = window.scrollY;

    let windowWidth = body.offsetWidth;

    let firstBreackpoint = firstBlock.offsetHeight + header.offsetHeight - firstBlockCustomersContainer.offsetHeight - window.innerHeight + (windowWidth / 100 * 3.9);
    let secondBreackpoint = firstBlock.offsetHeight + header.offsetHeight - window.innerHeight + (windowWidth / 100 * 3.9);
    let thirdBreackpoint = firstBlock.offsetHeight + header.offsetHeight - window.innerHeight + secondBlockImagesContainer.offsetHeight / 4 * 3;
    let fourthBreackpoint = firstBlock.offsetHeight + header.offsetHeight - window.innerHeight + secondBlock.offsetHeight + 2 * (windowWidth / 100 * 3.9);
    let fifthBreackpoint = firstBlock.offsetHeight + header.offsetHeight - window.innerHeight + secondBlock.offsetHeight + thirdBlockHeading.offsetHeight + thirdBlockTabControlsContainer.offsetHeight + 4 * (windowWidth / 100 * 3.9);
    let sixthBreackpoint = firstBlock.offsetHeight + header.offsetHeight - window.innerHeight + secondBlock.offsetHeight + thirdBlock.offsetHeight + 2 * (windowWidth / 100 * 3.9);
    let seventhBreackpoint = firstBlock.offsetHeight + header.offsetHeight - window.innerHeight + secondBlock.offsetHeight + thirdBlock.offsetHeight + fourthBlock.offsetHeight;
    let eighthBreackpoint = firstBlock.offsetHeight + header.offsetHeight - window.innerHeight + secondBlock.offsetHeight + thirdBlock.offsetHeight + fourthBlock.offsetHeight + 2 * (windowWidth / 100 * 3.9);
    let ninthBreackpoint = firstBlock.offsetHeight + header.offsetHeight - window.innerHeight + secondBlock.offsetHeight + thirdBlock.offsetHeight + fourthBlock.offsetHeight + fifthBlock.offsetHeight + (windowWidth / 100 * 3.9);

    if (scrollTop >= firstBreackpoint) {
        firstBlockCustomersContainer.classList.add('first_block_customers_container_animation');
    } else {
        firstBlockCustomersContainer.classList.remove('first_block_customers_container_animation');
    }

    if (scrollTop >= secondBreackpoint) {
        secondBlockSubHeading.classList.add('second_block_sub_heading_animation');
        secondBlockFirstImage.classList.add('second_block_first_image_animation');
        secondBlockHeading.classList.add('second_block_heading_animation');
        secondBlockParagraph.classList.add('second_block_paragraph_animation');
    } else {
        secondBlockSubHeading.classList.remove('second_block_sub_heading_animation');
        secondBlockFirstImage.classList.remove('second_block_first_image_animation');
        secondBlockHeading.classList.remove('second_block_heading_animation');
        secondBlockParagraph.classList.remove('second_block_paragraph_animation');
    }

    if (scrollTop >= thirdBreackpoint) {
        secondBlockSecondImage.classList.add('second_block_second_image_animation');
    } else {
        secondBlockSecondImage.classList.remove('second_block_second_image_animation');
    }

    if (scrollTop >= fourthBreackpoint) {
        thirdBlockHeading.classList.add('third_block_heading_animation');
        thirdBlockTabControls.forEach((everyControl) => {
            everyControl.classList.add('tab_control_animation');
        });
    } else {
        thirdBlockHeading.classList.remove('third_block_heading_animation');
        thirdBlockTabControls.forEach((everyControl) => {
            everyControl.classList.remove('tab_control_animation');
        });
    }

    if (scrollTop >= fifthBreackpoint) {
        thirdBlockCards.forEach((everyCard) => {
            everyCard.classList.add('third_block_card_animation');
        });
    } else {
        thirdBlockCards.forEach((everyCard) => {
            everyCard.classList.remove('third_block_card_animation');
        });
    }

    if (scrollTop >= sixthBreackpoint) {
        fourthBlockSubHeading.classList.add('fourth_block_sub_heading_animation');
        fourthBlockHeading.classList.add('fourth_block_heading_animation');
        fourthBlockParagraph.classList.add('fourth_block_paragraph_animation');
        fourthBlockLists.classList.add('fourth_block_lists_container_animation');
        fourthBlockImage.classList.add('fourth_block_image_animation');
    } else {
        fourthBlockSubHeading.classList.remove('fourth_block_sub_heading_animation');
        fourthBlockHeading.classList.remove('fourth_block_heading_animation');
        fourthBlockParagraph.classList.remove('fourth_block_paragraph_animation');
        fourthBlockLists.classList.remove('fourth_block_lists_container_animation');
        fourthBlockImage.classList.remove('fourth_block_image_animation');
    }

    if (scrollTop >= seventhBreackpoint) {
        decorationCircle.classList.add('decoration_circle_animation');
        decorationArrowRight.classList.add('decoration_arrow_right_animation');
        decorationArrowLeft.classList.add('decoration_arrow_left_animation');
        decorationArrowTop.classList.add('decoration_arrow_top_animation');
        decorationArrowBottom.classList.add('decoration_arrow_bottom_animation');
    } else {
        decorationCircle.classList.remove('decoration_circle_animation');
        decorationArrowRight.classList.remove('decoration_arrow_right_animation');
        decorationArrowLeft.classList.remove('decoration_arrow_left_animation');
        decorationArrowTop.classList.remove('decoration_arrow_top_animation');
        decorationArrowBottom.classList.remove('decoration_arrow_bottom_animation');
    } 

    if (scrollTop >= eighthBreackpoint) {
        fifthBlockSubHeading.classList.add('fifth_block_sub_heading_animation');
        fifthBlockHeading.classList.add('fifth_block_heading_animation');
        fifthBlockParagraph.classList.add('fifth_block_paragraph_animation');
        fifthBlockLists.classList.add('fifth_block_lists_container_animation');
        fifthBlockImage.classList.add('fifth_block_image_animation');
    } else {
        fifthBlockSubHeading.classList.remove('fifth_block_sub_heading_animation');
        fifthBlockHeading.classList.remove('fifth_block_heading_animation');
        fifthBlockParagraph.classList.remove('fifth_block_paragraph_animation');
        fifthBlockLists.classList.remove('fifth_block_lists_container_animation');
        fifthBlockImage.classList.remove('fifth_block_image_animation');
    }

    if (scrollTop >= ninthBreackpoint) {
        sixthBlockHeading.classList.add('sixth_block_heading_animation');
    } else {
        sixthBlockHeading.classList.remove('sixth_block_heading_animation');
    }
}
function tabsLogic (e) {
    for (anyControl of thirdBlockTabControls) {
        if (e.target == anyControl) {
            for (everyControl of thirdBlockTabControls) {
                everyControl.classList.remove('active_tab_control');
            }
            anyControl.classList.add('active_tab_control');

            let numberOfActiveControl = anyControl.dataset.controlNumber;

            thirdBlockContentItems.forEach((everyContent) => {
                everyContent.style = `transform: translateX(${-numberOfActiveControl * 100}vw)`;  
            });
        }
    }
}
function hideAndShowMenuButton () {

    let windowWidth = body.offsetWidth;

    if (windowWidth <= 1120) {
        menuButton.classList.remove('hide_header_item');
        for (everyHeaderItem of navLinks) {
            everyHeaderItem.classList.add('hide_header_item');
        }
        nav.style = `
            width: max-content;
        `;
        header.style = `
            justify-content: space-between;
        `;
        responsiveMenu.style = `
        transform: translateX(302px);
        `;
        menuButton.classList.remove('responsive_menu_button_active');
    } else {
        menuButton.classList.add('hide_header_item');
        for (everyHeaderItem of navLinks) {
            everyHeaderItem.classList.remove('hide_header_item');
        }
        nav.style = `
        width: 40%;
    `;
        header.style = `
        justify-content: none;
    `;
    }
}
function hideAndShowModalWindow () {
    menuButton.classList.toggle('responsive_menu_button_active');
    if (menuButton.classList.contains('responsive_menu_button_active')) {
        responsiveMenu.style = `
            transform: translateX(0);
        `;
        body.style = `
            overflow-y: hidden;
        `;
    } else {
        responsiveMenu.style = `
            transform: translateX(302px);
        `;
        body.style = `
        overflow-y: scroll;
    `;
    }
}
function mediaQuerie450 () {
    let windowWidth = body.offsetWidth;

    if (windowWidth <= 450) {
        firstBlockContent.style = `
            background-image: url(assets/sushi-1.png);
            background-size: 100vw;
            background-repeat: no-repeat;
            background-position: center;
        `;
    } else {
        firstBlockContent.style = `
            background: none;
        `;
    }
}
function enterYourEMailLogic () {
    let input = sixthBlockInput.value;

    if (input.trim() === '') {
        sixthBlockInput.value = '';
        neutralAlert.style.top = '20px';
        setTimeout(()=> {
            neutralAlert.style.top = '-200px';
        }, 5000)
    } else if (input.trim().includes('@') === false) {
        sixthBlockInput.value = '';
        negativeAlert.style.top = '20px';
        setTimeout(()=> {
            negativeAlert.style.top = '-200px';
        }, 5000)
    } else {
        sixthBlockInput.value = '';
        positiveAlert.style.top = '20px';
        setTimeout(()=> {
            positiveAlert.style.top = '-200px';
        }, 5000)
    }
}


