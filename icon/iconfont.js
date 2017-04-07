;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-huojian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M955.798141 185.82832c-0.409313 88.51404-22.61457 172.525632-57.201559 252.955731-40.010393 93.323474-132.003597 128.319776-209.773159 178.665334-17.088838 11.153792-35.200959 22.102928-54.438693 28.037973-59.04347 18.21445-78.383532 59.350455-68.45768 115.938043 16.577196 94.551414-57.917857 135.482762-113.072849 181.223544-35.303288 29.265914-49.117618-14.939942-52.494454-44.410513-6.753672-59.145798-32.335765-107.95643-66.104127-156.562406C280.021585 663.394824 201.22874 634.74288 114.044969 621.747177c-52.801439-7.879285-58.122514-23.023883-25.991406-65.387829 52.801439-69.480963 110.719296-120.849805 206.600979-103.146997 38.27081 7.060658 63.852903-8.595583 80.020785-48.401319 18.82842-46.150095 48.503647-87.797742 71.015889-132.617568C493.17158 177.437394 575.136604 126.17088 671.529929 96.70031c52.494454-16.065554 108.161087-25.377436 163.009094-29.675227C956.105126 57.508544 958.254022 61.601679 955.798141 185.82832zM900.64315 207.521935c1.944239-89.230339 1.841911-86.67213-67.946038-88.718697-41.44299-1.22794-75.722994 21.181973-114.403118 25.582093-107.240132 12.177076-182.553812 68.969321-233.308684 161.576496-28.549615 52.187469-57.201559 104.272609-84.011592 157.381033-16.474868 32.64275-40.112721 47.480364-77.053263 45.433796-34.689317-1.944239-69.890277-2.455881-104.374938 0.818627-31.005496 2.865194-52.903767 26.605376-55.87129 54.336365-3.990806 37.145198 32.02878 25.684421 51.266513 27.321675 27.117018 2.251224 51.982812 9.618867 68.560008 28.754272 55.666633 64.569202 137.836315 110.002998 150.525032 206.396323 2.148896 16.167882 14.325972 34.996303 29.777556 33.973019 12.58639-0.818627 26.196063-16.986509 35.610273-29.163585 20.363346-26.298391 13.302688-58.429499 10.846807-87.593085-5.116419-61.192365 7.981613-108.468072 73.881083-128.422105 17.088838-5.218747 31.312481-19.135405 47.992006-26.093734C802.305586 518.60018 900.950135 397.955031 900.64315 207.521935z"  ></path>' +
    '' +
    '<path d="M115.170581 954.621365c-44.819826 11.665434-51.778155-18.112122-50.24323-63.341261 2.353553-69.07165 21.079644-128.115119 87.797742-158.711302 14.223643-6.549016 26.810033-42.466274 50.447886-12.58639 23.637854 29.777556-4.604777 38.475467-22.102928 51.573499-21.795943 16.474868-45.536125 32.131108-55.25732 58.838813-6.958329 19.237734-12.893375 43.387229 1.330269 59.964425 15.451584 18.112122 39.908064 8.288598 58.838813 2.660538 32.335765-9.618867 51.164185-37.65684 68.764665-63.750575 11.460777-16.986509 21.181973-22.0006 39.396423-13.405016 25.275107 11.870091 7.162986 21.284301 1.841911 36.121915C266.821225 934.667333 199.182172 948.379334 115.170581 954.621365z"  ></path>' +
    '' +
    '<path d="M788.286599 343.720995c-0.306985 55.768962-56.894574 109.696013-113.482162 108.058759C622.51464 450.244829 568.075947 395.601479 567.768962 344.130309c-0.409313-56.382932 54.234036-111.947237 110.002998-111.844909C734.052563 232.490057 788.593584 287.338063 788.286599 343.720995z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)