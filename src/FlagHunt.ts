export type Flag = {
  text: string;
  answer: string;
  hints: string[];
  flagN: number;
};

export const FlagHuntData: Flag[] = [
  {
    answer: 'It was just in plain sight',
    text: 'The flag you are looking for is somewhere in the html...',
    hints: ['The answer is at the head'],
    flagN: 1
  },
  {
    answer: 'Happy birthday btw',
    text: "This one is going to be a harder, you ready? Let's go! Do you know how computers store all kinds of information? Be it numerical, text of file based, it all comes down to an arrangement of 1s and 0s. So can you find out what these bytes (8 bits = 1 byte) mean? :01001000 01100001 01110000 01110000 01111001 00100000 01100010 01101001 01110010 01110100 01101000 01100100 01100001 01111001 00100000 01100010 01110100 01110111  ",
    hints: [
      'Look how to count in binary, and then index these numbers in an ascii table',
      'Try to convert them with an ascii/utf-8/unicode encoder'
    ],
    flagN: 2
  },
  {
    answer: 'You cannot find me!',
    text: "The final one is very hard, so if you solve it, give yourself a pat on the back. In Flag2 we looked at how 0s and 1s are arranged and encoded in a meaningful way to represent real information. Yet, there are countless ways for us to 'hide' that same information. Now if you ask me... that cake picture is looking kind of sus, you might want to look at the bytes :)",
    hints: [
      'There is some hidden data inside of the png file',
      'Png files always begin and end with the same bytes, meaning that a program that displays that file stops reading the moment it encounters these bytes. Which means that anyone could hide information after the "end" of the file',
      'Get yourself a hex editor to inspect the image file',
      "Oh common.... it's not really that hard!"
    ],
    flagN: 3
  }
];
