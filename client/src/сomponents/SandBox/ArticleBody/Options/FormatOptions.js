import React from "react";
import styles from "../../../../scss-blocks/SandBox/FormatOptions.module.scss"

const FormatOptions = () => {
     return (
        <button className={styles.svgBtn} >
        <svg display={"none"}>
            <symbol id={"delete"} viewBox="-35 0 680 680.00207">
            <g id="surface1">
              <path d="M 23.402344 609.601562 L 384.902344 609.601562 C 383.402344 606.300781 382.199219 602.898438 381 599.398438 C 380.601562 598.300781 380.300781 597.101562 380 596 C 379.300781 593.601562 378.601562 591.101562 378 588.699219 C 377.699219 587.398438 377.402344 586 377.199219 584.699219 C 376.699219 582.398438 376.300781 580 376 577.5 C 375.800781 576.101562 375.601562 574.699219 375.5 573.300781 C 375.300781 570.699219 375.101562 568.101562 375.101562 565.5 C 375.101562 564.601562 375 563.699219 375 562.699219 C 375 562.398438 375 562.101562 375 561.800781 C 375 558.898438 375.199219 555.898438 375.402344 553 C 375.5 552.199219 375.5 551.300781 375.601562 550.5 C 376.402344 543.199219 377.800781 535.898438 379.800781 528.898438 C 391 491.199219 420.5 461.601562 458.199219 450.5 C 465.300781 448.398438 472.601562 447 479.902344 446.300781 C 480.800781 446.199219 481.699219 446.199219 482.5 446.101562 C 485.402344 445.898438 488.402344 445.699219 491.199219 445.699219 C 491.5 445.699219 491.800781 445.699219 492.199219 445.699219 C 493.101562 445.699219 494 445.800781 495 445.800781 C 497.601562 445.898438 500.199219 446 502.800781 446.199219 C 504.199219 446.300781 505.601562 446.5 507 446.699219 C 509.402344 447 511.800781 447.398438 514.199219 447.898438 C 515.601562 448.199219 516.902344 448.398438 518.300781 448.699219 C 520.800781 449.300781 523.199219 449.898438 525.601562 450.601562 C 526.800781 450.898438 527.902344 451.199219 529 451.601562 C 532.5 452.800781 535.902344 454 539.199219 455.5 L 539.199219 23.5 C 539.199219 10.601562 528.699219 0.101562 515.800781 0.101562 L 152.402344 0.101562 L 152.402344 117.199219 C 152.402344 130.101562 141.902344 140.601562 129 140.601562 L 0 140.601562 L 0 586.101562 C 0 599.101562 10.5 609.601562 23.402344 609.601562 Z M 445.5 234.5 Z M 140.601562 234.5 Z M 445.5 304.800781 Z M 445.5 375.101562 Z M 386.800781 445.5 Z M 339.902344 515.800781 Z M 339.902344 515.800781 " style={{stroke: "none", fillRule: "nonzero", fill:"rgb(100%,91.372549%,80%)", fillOpacity: 1}}/>
            </g>
            </symbol>
          </svg>
          <svg className={styles.iconDelete}>
            <use xlinkHref={"#delete"}></use>
          </svg>
      </button>
     )
 } 
 
 export default FormatOptions