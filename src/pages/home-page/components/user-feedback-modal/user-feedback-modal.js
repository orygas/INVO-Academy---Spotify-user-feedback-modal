import Swal from 'sweetalert2';
import { UserFeedbackComponent } from '../user-feedback-component/user-feedback-component';

export const UserFeedbackModal = () => {
    const userFeedbackModalClosedTimestamp = localStorage.getItem("userFeedbackModalClosedTimestamp");

    if (userFeedbackModalClosedTimestamp) {
        const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
        const currentDate = new Date();
        const threeDaysAgo = currentDate.getTime() - threeDaysInMilliseconds;

        if (userFeedbackModalClosedTimestamp >= threeDaysAgo) {
            return;
        }
    }

    Swal.fire({
        template: '#user-feedback-modal',
        showConfirmButton: false,
        width: '496px',
        padding: 0,
        customClass: {
            container: 'user-feedback-modal',
        },
        background: 'var(--background-color)',
        color: 'var(--on-background-color)',
        showCloseButton: true,
        allowEnterKey: false,
        closeButtonHtml: '<img src="/close-icon.svg" alt="X" />',
        didClose: () => {
            localStorage.setItem("userFeedbackModalClosedTimestamp", Date.now());
        },
    });

    UserFeedbackComponent();
};