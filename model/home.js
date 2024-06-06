module.exports = {
  
    getSampleHomePage: (req,res) => {
  
      res.render('index.ejs',
        {title: 'To Do App',
         foods: [ 
          {
           id: 1,
           name: 'chumus masbacha',
           cosher_type: 'parve',
           cuisine_id: 1,
           image: 'chummus-masbacha.jpg', 
           kalories: 550, 
           prepare_time_min: 120, 
           ingredients: 'chumus, tchina, oil',  
           type_of_dish: 'main'
          },
          {
           id: 2,
           name: 'sushi',
           cosher_type: 'parve',
           cuisine_id: 2,
           image: 'sushi.jpeg',
           kalories: 250, 
           prepare_time_min: 90, 
           ingredients: 'rice, nuri, avocado',  
           type_of_dish: 'main'
          }
         ]
        })
      
    },
  
    getSmallHomePage: (req,res) => {
  
      res.render('small-index.ejs',
        {title: 'Yummy'})
  
    }
  
  }