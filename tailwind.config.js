/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lt-green': '#8a9d8e',
        'bg-blue': '#27253e',
      },
      spacing: {
        '1/8':'12.5%',
        '3/8':'37.5%',
        '5/8':'62.5%',
        '7/8':'87.5%',
      },
      inset:{
        '1/7': '14.3%',
        '2/7': '28.6%',
        '3/7': '42.9%',
        '4/7': '57.1%',
        '5/7': '71.4%',
        '6/7': '85.71%',
      },
      height:{
        '2/100':'2%','4/100':'4%','6/100':'6%','8/100':'8%',
        '10/100':'10%','12/100':'12%','14/100':'14%','16/100':'16%','18/100':'18%',
        '20/100':'20%','22/100':'22%','24/100':'24%','26/100':'26%','28/100':'28%',
        '30/100':'30%','32/100':'32%','34/100':'34%','36/100':'36%','38/100':'38%',
        '40/100':'40%','42/100':'42%','44/100':'44%','46/100':'46%','48/100':'48%',
        '50/100':'50%','52/100':'52%','54/100':'54%','56/100':'56%','58/100':'58%',
        '60/100':'60%','62/100':'62%','64/100':'64%','66/100':'66%','68/100':'68%',
        '70/100':'70%','72/100':'72%','74/100':'74%','76/100':'76%','78/100':'78%',
        '80/100':'80%','82/100':'82%','84/100':'84%','86/100':'86%','88/100':'88%',
        '90/100':'90%','92/100':'92%','94/100':'94%','96/100':'96%','98/100':'98%','100%':'100%',
        '1/100':'1%','3/100':'3%','5/100':'5%','7/100':'7%','9/100':'9%',
        '11/100':'11%','13/100':'13%','15/100':'15%','17/100':'17%','19/100':'19%',
        '21/100':'21%','23/100':'22%','25/100':'25%','27/100':'27%','29/100':'29%',
        '31/100':'31%','32/100':'33%','35/100':'35%','37/100':'37%','39/100':'39%',
        '41/100':'41%','43/100':'43%','45/100':'45%','47/100':'47%','49/100':'49%',
        '51/100':'51%','53/100':'53%','55/100':'55%','57/100':'57%','59/100':'59%',
        '61/100':'61%','63/100':'63%','65/100':'65%','67/100':'67%','69/100':'69%',
        '71/100':'71%','73/100':'73%','75/100':'75%','77/100':'77%','79/100':'79%',
        '81/100':'81%','83/100':'83%','85/100':'85%','87/100':'87%','89/100':'89%',
        '91/100':'91%','93/100':'93%','95/100':'95%','97/100':'97%','99/100':'99%',
      },
      fontFamily: {
        display: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
