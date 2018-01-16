const dummyData = {
  email: 'hunter.ledet@gmail.com',
  nameFirst: 'Hunter',
  nameLast: 'Ledet',
  photoUrl: 'https://lh4.googleusercontent.com/-cWf_QUUKOlw/AAAAAAAAAAI/AAAAAAAAADg/EVR-gBan7do/s96-c/photo.jpg',

  emergencyContact: {
    nameFirst: 'Mary',
    nameLast: 'Ledet',
    address: '123 abc st.',
    phone: '123-123-1233',
    email: 'asdf@asdf.asdf',
  },
  sessions: [
    {
      id: 1,
      description: 'Biology',
      joinCode: 'abcdefuckit',
      googleCal: 'a calendar link',
    },
    {
      id: 2,
      description: 'Algebra',
      joinCode: 'hijklooser',
      googleCal: 'another calendar link',
    },
  ],
  assignments: [
    {
      id: 1,
      session: 'Algebra',
      title: 'pythagorean theorem',
      dueDate: '2018-01-15T22:22:00.598Z',
    },
    {
      id: 2,
      session: 'Biology',
      title: 'digestive system',
      dueDate: '2018-01-15T22:23:22.022Z',
    },
  ],

};

export default dummyData;
