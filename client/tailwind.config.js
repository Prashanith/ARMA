module.exports = {
  content: [
	"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily:{
      inter:'Inter, sans-serif',
    },
   
    extend: {
      colors:{
        'arma-blue':'#139BEB',
        'arma-green':'#55D380',
        'arma-red':'#FC6262',
        'arma-yellow':'#F0D90D',
        'arma-title':'#1970A3'
      }
    },
  },
  plugins: [],
}