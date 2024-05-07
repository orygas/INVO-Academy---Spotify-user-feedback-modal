export const UserFeedbackComponent = () => {
    const userFeedbackComponent = document.querySelector('.user-feedback-component');
    const allRatesTiles = userFeedbackComponent.querySelectorAll('.user-feedback-component__single-rate-tile');
    const confirmButton = document.querySelector('.user-feedback-component__confirm-button');
    let currentRating = null;
    let isLoading = false;

    confirmButton.addEventListener('click', () => {
        confirmButton.setAttribute('data-loading', 1)
        isLoading = true

        if(isLoading) {
            console.log('Already processing')

            return
        }
    })

    addListenersToAllRatesTiles();

    function addListenersToAllRatesTiles() {
        allRatesTiles.forEach((singleRateTile) => {
            singleRateTile.addEventListener('click', () => {
                singleRateTile.toggleAttribute('data-selected');
                

                if (singleRateTile.hasAttribute('data-selected')) {
                    currentRating = singleRateTile.getAttribute('data-rate');
                } 
                
                else {
                    currentRating = null
                }

                afterRatingChanged(singleRateTile);
            })
        })
    }

    function disselectOtherRatings(clickedTile) {
        allRatesTiles.forEach((singleRateTile) => {
            if (singleRateTile != clickedTile) {
                singleRateTile.removeAttribute('data-selected')
            }
        })
    }

    function afterRatingChanged(singleRateTile) {
        disselectOtherRatings(singleRateTile);
        setProperButtonState(currentRating);
    }

    function setProperButtonState() {
        if (currentRating) {
            confirmButton.removeAttribute('disabled')
        }
        else {
            confirmButton.setAttribute('disabled', true)
        }
    }
};