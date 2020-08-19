function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
}
const products = [
    {
      id: 1,
      title: 'Maltipooch',
      description: 'This is my cute little pet animal.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'https://photos.puppyspot.com/2/listing/614002/photo/5152364_medium.jpg',
      
    },
    {
        id: 2,
        title: 'Fluffy Bunnies',
        description: 'This is my cute little pet animal.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: "https://i.pinimg.com/originals/35/e8/40/35e8407cca3a26188e78b75847b2d883.jpg"
        
    },
    {
        id: 3,
        title: 'Piglets',
        description: 'This is my cute little pet animal.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'https://i.pinimg.com/originals/54/85/bc/5485bc4a91898ae61c679fd10cee33c8.jpg'
        
      },
      {
          id: 4,
          title: 'Giraffy',
          description: 'This is my cute little pet animal.',
          url: '#',
          votes: generateVoteCount(),
          submitterAvatarUrl: 'https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg',
          
      },
      {
        id: 5,
        title: 'Foxy',
        description: 'This is my cute little pet animal.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'https://i.pinimg.com/564x/e6/44/ea/e644eacfa75ecb5cb73e220bb0c7ef01.jpg'
      },
      {
          id: 6,
          title: 'Kitty',
          description: 'This is my cute little pet animal.',
          url: '#',
          votes: generateVoteCount(),
          submitterAvatarUrl: 'https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg',
          
      }
]

export default products