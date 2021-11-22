const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarFileChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const adFileChooser = document.querySelector('#images');
const adPreview = document.querySelector('.ad-form__photo img');

const setAvatarChooser = (avatarChooser, preview) => {
  avatarChooser.addEventListener('change', () => {
    const file = avatarChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

setAvatarChooser(avatarFileChooser, avatarPreview);
setAvatarChooser(adFileChooser, adPreview);
