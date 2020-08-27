const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 4;
      break;
    case 'thursday':
      return 10;
      break;
    case 'friday':
      return 3;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 9;
      break;
  }
};

const getActualSleepHours = () => {
  return getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
};

if (actualSleepHours === idealSleepHours) {
  console.log('Tidurmu cukup nak, jaga kesehatan');
} else if (actualSleepHours > idealSleepHours) {
  console.log('Ngeboo wae terus, koyo raono gawean');
} else {
  console.log('Kamu kurang tidur, tidur sana gih')
};

if (actualSleepHours < idealSleepHours)  {
  console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep
  than you needed this  week. Get some rest.`);
};

calculateSleepDebt();
