* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-emoji: &#128525;
}

h1 {
  text-align: center;
  margin-bottom: 50px;
  text-shadow: -5px 0px 0px gray;
}

h2 {
  animation: welcome 10s infinite;
}

.box {
  border: 5px solid;
  width: 470px;
  margin: 0 auto;
  /* box-shadow: -10px 10px 5px gray; */
  /* box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px; */
  transition: 5s ease-in-out;
  animation: welcome 10s infinite;
}
ul {
  border: 1px solid;
  text-align: center;
  font-size: 30px;
}

li:nth-child(odd) {
  color: red;
}

.box:hover {
  cursor: pointer;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  /* transform: scale(1.5); */
  /* transform: rotate(180deg); */
  /* transform: skew(30deg, 20deg); */
  transform: translate(300px, 500px);
}

p {
  font-size: 30px;
}

p::first-letter {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 60px;
}
/* p::first-line {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 40px;
} */

p::before {
  content: "😀";
}

.typography span {
  text-align: center;
  font-size: 50px;
  display: inline-block;
  opacity: 0;
  animation: fadin 5s forwards;
}

@keyframes welcome {
  0% {
    /* transform: rotate(0deg); */
    /* opacity: 0; */
    color: black;
    transform: translateX(0px);
  }

  50% {
    /* transform: rotate(90deg); */
    /* opacity: 1; */
    color: red;
    /* transform: translateX(150px); */
    transform: rotateX(45deg);
    font-size: 3em;
  }

  100% {
    /* transform: rotate(0deg); */
    /* opacity: 0; */
    color: black;
    transform: translateX(0px);
  }
}

.typography span:nth-child(1) {
  animation-delay: 0s;
}
.typography span:nth-child(2) {
  animation-delay: 2s;
}
.typography span:nth-child(3) {
  animation-delay: 4s;
}
.typography span:nth-child(4) {
  animation-delay: 6s;
}
.typography span:nth-child(5) {
  animation-delay: 8s;
}
.typography span:nth-child(6) {
  animation-delay: 10s;
}
.typography span:nth-child(7) {
  animation-delay: 12s;
}

@keyframes fadin {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}