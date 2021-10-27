const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const options = capacity.querySelectorAll('option');
const roomToGuest = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

roomNumber.addEventListener('change', (evt) => {
  const currentRoomNumber = evt.target.value;
  options.forEach((option) => {
    option.selected = false;
    option.disabled = true;
  });

  if (currentRoomNumber === '100') {
    capacity.querySelector(`option[value='0']`).selected = true;
  } else {
    capacity.querySelector(`option[value='${currentRoomNumber}']`).selected = true;
  }

  roomToGuest[currentRoomNumber].forEach((value) => {
    const currentCapacity = capacity.querySelector(`option[value='${value}']`)
    currentCapacity.disabled = false;
  });

});

