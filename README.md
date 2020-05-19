![logo](./src/assets/img/logo.svg)

## Descripción del producto📎
Tenpo es una aplicación financiera puesta en marcha el presente año y que busca democratizar el acceso a los productos financieros a través de acercar las finanzas a la gente con transparencia, contenido y educación, aspiran a realizar una transformación en las finanzas de la región. Actualmente su funcionamiento se encuentra certificado por la Comisión para el Mercado Financiero (CMF).
Para lograr esto ofrecen la opción de abrir una cuenta digital gratuita con la que se pueden realizar recargas, pagos de cuentas y transferencias entre usuarios y usuarias de la aplicación y una tarjeta Mastercard Tenpo que entrega la opción de compras internacionales con una tarjeta Mastercard digital que funciona a través de prepago. 
Se puede acceder a ambas opciones a través de la aplicación Tenpo disponible para iOS y Android. Para poder acceder a los productos ofrecidos se requiere ser mayor de edad y entregar información como ocupación, dirección y numero de serie del carnet de identidad.
A través de esto es que la empresa busca cumplir su objetivo de democratización de acceso a productos financieros, ya que entregan acceso a tarjetas que permiten compras internacionales en distintos lugares, rompiendo los limites burocráticos impuestos por las entidades bancarias para otorgar tarjetas de crédito. 



## Problemática
Apertura de cuenta remota para personas con habilidades diferentes: <br>

¿Cómo podemos lograr que una persona con habilidades diferentes puedan lograr la apertura de una cuenta remota con Tenpo? En este contexto podríamos lograr que pueda cumplir sus obligaciones financieras con una herramienta mucho más amigable.

## Nuestra solución 💡
A medida que conversamos con personas con disminución visual, descubrimos que los celulares en la actualidad vienen dotados de herramientas de accesibilidad que resultan bastante útiles para los y las usuarias. 
Al investigar este descubrimiento aprendimos que para el 2014 el 82% de los screen readers fueron usados en dispositivos móviles, pero además nos dimos cuenta, poseen políticas de accesibilidad claramente estipuladas que determinan formas de sintaxis para que el código funcione de manera fluida y sea un aporte real para las personas con discapacidad. 
Debido que esta es una aplicación que ya se encuentra funcionando plenamente, consideramos que la mejor solución que podíamos entregar era la de adaptar el código actual a una sintaxis que sea apropiada para funcionar de forma eficiente con los screen readers disponibles en los distintos sistemas operativos, al mismo tiempo que mejorar la presentación visual para generar una mejor comunicación con las y los usuarios pero también para que los tamaños de letra y contraste sean apropiados para personas con disminución visual y con problemas de movilidad reducida menores.
La solución que proponemos es un código que cumpla con los requerimientos [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG/#abstract) y un diseño visual que cumpla tanto con los requerimientos de los [Human Interface Guidelines para iOS](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/) como los de [Material Design para accesibilidad](https://material.io/design/usability/accessibility.html#assistive-technology). Todo para entregar un producto que responda de la mejor forma posible a las herramientas de accesibilidad disponible en los celulares.

## UX
 
 Para el diseño del presente proyecto se recurrió principalmente al Design Sprint, proceso de diseño que busca obtener un equilibrio entre las necesidades de los y las usuarias, de la empresa y de la tecnología disponible; pero en períodos de tiempo acotados. El Design Sprint original está pensado para entregar una solución en 5 días.<br> 
 <br>
 **1. Map**<br>
En esta etapa logramos identificar el problema e identificar los factores que influyen en el. 
Respecto a la situación financiera de nuestro país nos encontramos con que de acuerdo con la Superintendencia de Bancos e Instituciones Financieras (SBIF) el 97% de los chilenos adultos tiene acceso a productos financieros, sin embargo, solo el 10% tiene acceso a líneas de créditos; es decir, la población chilena se encuentra sub bancarizada. Además el 92% de las personas no se encuentra feliz con los servicios bancarios que tiene, esto redunda directamente en una desconfianza hacia los servicios financieros que se evidencia a través del desinterés en la app motivado en la cantidad de datos que se requieren para comenzar a utilizarla antes de conocerla y decidir si quieren confiar en ella o no.
Analizamos también otras aplicaciones financieras donde pudimos comprobar que Tenpo es de las que menos documentos requiere para iniciar una cuenta digital.
En paralelo, trabajamos temas relacionados con la accesibilidad y llegamos a la hipótesis de que actualmente existen muchas herramientas disponibles para apoyar la accesibilidad en los dispositivos móviles, sin embargo, al momento de desarrollar las aplicaciones se dejan de lado una serie buenas prácticas que podrían hacer de la accesibilidad algo común. Si logramos ajustar el código a los estándares establecidos podremos entregar una aplicación accesible para muchas más personas. 
Con esto en mente procedimos a realizar una investigación de las distintas alternativas de accesibilidad que existen presentes en el mercado destacándose entre ellas a aplicación Lazarillo que consiste en un GPS accesible para personas con ceguera o baja visión.
Para el proceso de empatizar se llevaron a cabo tres entrevistas con personas de distintas edades y grados de disminución visual, dos de ellas asociadas a glaucoma y otra persona con hipermetropía. Manifestaron que les es más fácil leer cuando los fondos son oscuros y con letras claras (modo oscuro) y que requerían tener tamaños grandes de letras o agregar la opción de zoom para poder ver tamaños pequeños de letras que además debían tener un contraste claro con el fondo, respectivamente.
<br><br>
**2. Sketch**

### Definición de usuario
### Historia de Usuario
### Prototipo
 


## Informe sobre el rendimiento de la página (Lighthouse)
# ![Lighthouse](./src/assets/img/rendimiento.png)

## Tecnologías utilizadas ⚙️
Para desarrollar la aplicación se utilizó: 
- React.js
- Material-UI 
- Flexbox
- React Hooks
- React-router-dom



## Link de Deploy 🚀
Puedes entrar al deploy en el siguiente [link](https://tenpo-hackathon.web.app/)

####  Developers 👩‍💻

* [Daniela González - UX Designer](https://github.com/DaniAzul)  
* [Corina Varas - Frontend](https://github.com/CorinaVaras)
* [Geraldine Becerra - Frontend](https://github.com/andgerald) 
* [Veronica Urrutia - Frontend](https://github.com/veronicaurrutia)