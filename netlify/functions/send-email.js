const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    const { nombre, email, estudio } = JSON.parse(event.body);

    const resultado = await resend.emails.send({
      from: 'Torá del Rebe <from: "noreply@toradelrebe.com>",>
      to: email,
      subject: '¡Gracias por sumarte al estudio de Torá del Rebe!',
      html: `
        <h2>¡Hola ${nombre}!</h2>

        <p>Gracias por sumarte al estudio comunitario de Torá del Rebe.</p>

        <p>
          Tu compromiso para estudiar
          <strong>${estudio}</strong>
          quedó registrado correctamente.
        </p>

        <p>
          Cada persona que estudia agrega una nueva luz al mundo.
        </p>

        <p>
          Te deseamos mucho éxito en este estudio.
        </p>

        <p>
          Con cariño,<br>
          Torá del Rebe<br>
          Jabad Argentina
        </p>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify(resultado)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};
