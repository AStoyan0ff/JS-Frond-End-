document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(function (profile) {

        const button = profile.querySelector('button');
        const hidden = profile.querySelector('.hidden-fields');
        const locked = profile.querySelector('input[value="lock"]');

        button.addEventListener('click', function () {
            if (locked.checked) return; // is locked...

            const isHidden = hidden.style.display !== 'block';

            hidden.style.display = isHidden
                ? "block"
                : "none";

            button.textContent = isHidden
                ? "Show less"
                : "Show more";

            // if (isHidden) {
            //     hidden.style.display = 'block';
            //     button.textContent = 'Show less';
            //
            // } else {
            //     hidden.style.display = 'none';
            //     button.textContent = 'Show more';
            // }
        });
    });
}