export const rulesEngine = (state, birthday) => {
  const getDateInPast = (years, months) => {
    const yearsAgo = new Date(
      new Date().setFullYear(new Date().getFullYear() - years)
    );

    const yearsAndMonthsAgo = new Date(
      yearsAgo.setMonth(new Date(yearsAgo).getMonth() - months)
    );

    //Setting hours 0 gives us the beginning of the day; this assumes that we don't care about the time of day
    return new Date(new Date(yearsAndMonthsAgo).setHours(0, 0, 0, 0));
  };

  const formattedBirthday = new Date(new Date(birthday).setHours(0, 0, 0, 0));

  if (
    state.length === 2 &&
    getDateInPast(55, 6) <= formattedBirthday &&
    formattedBirthday <= getDateInPast(17, 6)
  ) {
    return true;
  }

  return false;
};
