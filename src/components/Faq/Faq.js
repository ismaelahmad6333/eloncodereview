const Faq = () => {
  return (
    <section className="container faq">
      <div className="faq-heading">
        <h2>Frequently asked questions</h2>
        <p>
          Such an awe-inspiring service yet simple service is hard to believe -
          so you may have some questions. Here are some of the more frequent
          asked.
        </p>
      </div>
      <div className="faq-cards">
        <article className="faq-card">
          <span>Does Elon Musk review the code personally?</span>
          <p>
            Of course! Elon has rescheduled large blocks of time away from
            making electric cars and saving humanity by colonizing Mars to focus
            almost entirely on reviewing YOUR code.
          </p>
        </article>
        <article className="faq-card">
          <span>Sounds expensive. How much does this cost?</span>
          <p>
            This service is very inexpensive. Check out our pricing table. To
            ensure the continuation of life on planet Earth code reviews are one
            of the safest ways to ensure no large infestations of bugs occur.
          </p>
        </article>
        <article className="faq-card">
          <span>How do I apply for a job helping with these code reviews?</span>
          <p>
            Due to Elon's fanatical adherence to time mangement principles and
            his magical 'LGTM' commentary there won't ever be a pull request
            that goes un-reviewed for longer than 2 to 3 minutes. As such we do
            not foresee needing to hire any more people.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Faq
