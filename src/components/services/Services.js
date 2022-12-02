const Services = () => {
  return (
    <section className="container services">
      <div className="left">
        <h1 className="services-heading">No fuss way to review your code.</h1>
        <svg
          class="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="700"
          fill="none"
          viewBox="0 500 500 500"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="5"
                height="5"
                class="text-gray-200"
                fill="hsl(212, 33%, 80%)"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          ></rect>
        </svg>
      </div>
      <div className="right">
        <article className="service">
          <span>🖨️</span>
          <h4 className="service-title">Print your code</h4>
          <p className="service-info">
            Go to your favorite text editor, select all the code you wrote in
            the last 30 days ago and copy paste it into Microsoft Word. Then
            press Print. Easy as that.
          </p>
        </article>
        <article className="service">
          <span>📠</span>
          <h4 className="service-title">Fax Your Printouts</h4>
          <p className="service-info">
            Take your code print outs and fax them to our troll free number. Our
            AI will recombine the pages in correct order and then robot
            technology will deliver them to Elon for review.
          </p>
        </article>
        <article className="service">
          <span>✉️</span>
          <h4 className="service-title">Wait for the mailman</h4>
          <p className="service-info">
            Get your code review print out back with Elon Musk's handwritten
            notes and hand drawn emojis.
          </p>
        </article>
        <article className="service">
          <span>🚀</span>
          <h4 className="service-title">Send your code to space</h4>
          <p className="service-info">
            All code reviews merged after a review by Elon Musk are
            automatically re-printed and sent to space aboard a SpaceX rocket.
            *Enterprise plan only.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Services
