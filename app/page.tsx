const programAreas = [
  {title:"Transparencia y rendición de cuentas", description:"Auditoría financiera y patrimonial de los últimos diez años, publicación periódica de información institucional y controles de gestión."},
  {title:"Defensa y dignidad del abogado", description:"Atención a reclamaciones, observatorio del ejercicio profesional y estudio de la figura del Defensor del Abogado."},
  {title:"Seguridad social, salud y bienestar", description:"Fondo de solidaridad, asistencia sanitaria y estudio de una pensión solidaria para colegiados retirados sin recursos suficientes."},
  {title:"Modernización tecnológica nacional", description:"Sede electrónica, carné digital, expediente del colegiado, trámites, pagos y servicios seguros para todo el país."},
  {title:"Formación y capacitación profesional", description:"Instituto de actualización jurídica, escuela virtual, becas, formación práctica y red nacional de mentoría."},
  {title:"Oportunidades laborales", description:"Bolsa nacional de empleo, apoyo a despachos independientes y directorio de profesionales y servicios jurídicos."},
  {title:"Fortalecimiento de las seccionales", description:"Descentralización de los servicios, participación territorial y distribución transparente de recursos."},
  {title:"Apoyo a los abogados jóvenes", description:"Primer empleo jurídico, mentoría, capacitación, becas y apoyo para iniciar el ejercicio profesional."},
  {title:"Asistencia jurídica y compromiso social", description:"Orientación legal para población vulnerable, jornadas nacionales y programas de asistencia jurídica con criterios transparentes."},
  {title:"Participación gremial y comunicación directa", description:"Núñez te Escucha, consultas a los colegiados, seguimiento de solicitudes y rendición periódica de resultados."},
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio">NÚÑEZ CARD 2026</a>
        <nav aria-label="Navegación principal">
          <a href="#programa">Programa</a>
          <a href="#escucha">Te escucha</a>
          <a href="#agenda">Agenda</a>
          <a href="#noticias">Noticias</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-inner">
          <div className="identity-slot" aria-label="Espacio reservado para el logotipo oficial">
            <span>LOGOTIPO OFICIAL</span>
            <small>pendiente de incorporación</small>
          </div>

          <div className="topline">NÚÑEZ CARD 2026</div>
          <p className="eyebrow">Candidatura a la Presidencia del Colegio de Abogados de la República Dominicana</p>
          <h1>Dr. Francisco Núñez Cáceres</h1>
          <p className="term">Presidente 2026–2029</p>
          <p className="motto">Transparencia · Moralidad · Justicia</p>

          <div className="actions">
            <a href="#programa" className="primary">Conoce el programa</a>
            <a href="#escucha" className="secondary">Núñez te escucha</a>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div className="section-heading">
          <span>PLATAFORMA DIGITAL</span>
          <h2>Información directa, participación y comunicación con el gremio.</h2>
        </div>
        <div className="quick-grid">
          <a className="quick-card" href="#perfil"><strong>Conoce a Núñez</strong><span>Perfil y trayectoria</span></a>
          <a className="quick-card" href="#programa"><strong>Programa</strong><span>Propuestas por áreas</span></a>
          <a className="quick-card" href="#escucha"><strong>Núñez te escucha</strong><span>Ideas y propuestas</span></a>
          <a className="quick-card" href="#agenda"><strong>Agenda</strong><span>Encuentros y actividades</span></a>
          <a className="quick-card" href="#noticias"><strong>Noticias</strong><span>Comunicados y novedades</span></a>
          <a className="quick-card" href="#participa"><strong>Participa</strong><span>Colabora e infórmate</span></a>
        </div>
      </section>

      <section className="section content-section" id="perfil">
        <div className="section-kicker">CANDIDATO</div>
        <h2>Conoce a Francisco Núñez Cáceres</h2>
        <div className="content-panel pending">
          <p>La biografía, trayectoria profesional y experiencia gremial se incorporarán aquí cuando recibamos el contenido oficial confirmado.</p>
        </div>
      </section>

      <section className="section content-section" id="programa">
        <div className="section-kicker">PROGRAMA 2026–2029</div>
        <h2>Diez ejes para el desarrollo institucional del CARD.</h2>
        <p className="section-copy">Versión de trabajo de alcance nacional. Estas propuestas requieren validación definitiva por el candidato y el equipo responsable antes de convertirse en compromisos oficiales.</p>
        <div className="program-grid">
          {programAreas.map((area, index) => (
            <article className="program-card" key={area.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-section" id="escucha">
        <div className="section-kicker">PARTICIPACIÓN</div>
        <h2>Núñez te escucha</h2>
        <p className="section-copy">Canal para que los abogados compartan problemas, ideas y propuestas relacionadas con el CARD.</p>
        <form className="listen-form">
          <div className="field-row">
            <label>Nombre
              <input type="text" name="nombre" placeholder="Nombre y apellido" />
            </label>
            <label>Provincia
              <input type="text" name="provincia" placeholder="Provincia" />
            </label>
          </div>
          <label>Correo o teléfono <small>(opcional)</small>
            <input type="text" name="contacto" placeholder="Para poder responderte" />
          </label>
          <label>¿Cuál es el principal problema que debería atender el CARD?
            <textarea name="problema" rows={4} placeholder="Escribe aquí tu opinión" />
          </label>
          <label>Tu propuesta
            <textarea name="propuesta" rows={5} placeholder="Comparte una idea o solución" />
          </label>
          <button className="form-button" type="button" disabled>Envío disponible al conectar Supabase</button>
          <p className="form-note">No se guardará ningún dato hasta activar el backend y la política de privacidad.</p>
        </form>
      </section>

      <section className="section content-section" id="agenda">
        <div className="section-kicker">AGENDA</div>
        <h2>Encuentros y actividades</h2>
        <div className="empty-state">
          <strong>Agenda preparada.</strong>
          <p>Los próximos encuentros, reuniones y convocatorias aparecerán aquí con fecha, lugar y opción de confirmar participación.</p>
        </div>
      </section>

      <section className="section content-section" id="noticias">
        <div className="section-kicker">ACTUALIDAD</div>
        <h2>Noticias y comunicados</h2>
        <div className="empty-state">
          <strong>Canal de publicaciones preparado.</strong>
          <p>Podremos publicar comunicados, vídeos, fotografías y novedades de la candidatura desde el panel de administración.</p>
        </div>
      </section>

      <section className="section content-section" id="participa">
        <div className="section-kicker">PARTICIPA</div>
        <h2>Mantente conectado</h2>
        <div className="content-panel">
          <p>Esta sección quedará vinculada a los canales oficiales de la candidatura, al grupo profesional de LinkedIn y a las herramientas de contacto cuando estén confirmadas.</p>
        </div>
      </section>

      <section className="section compact">
        <div className="notice">
          <strong>Versión inicial funcional.</strong>
          <p>La estructura y la navegación ya están definidas. El programa se presenta como borrador de trabajo. La biografía, el logotipo y los contenidos oficiales se publicarán una vez confirmados.</p>
        </div>
      </section>

      <footer>
        <strong>NÚÑEZ CARD 2026</strong>
        <span>Transparencia · Moralidad · Justicia</span>
      </footer>
    </main>
  );
}
