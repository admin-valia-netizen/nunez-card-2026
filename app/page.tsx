const sections = [
  { title: "Conoce a Núñez", text: "Perfil, trayectoria y visión para el CARD 2026–2029." },
  { title: "Programa", text: "Propuestas organizadas por áreas para consultar de forma clara y rápida." },
  { title: "Núñez te escucha", text: "Canal para que los abogados compartan problemas, ideas y propuestas." },
  { title: "Agenda", text: "Encuentros, actividades y convocatorias de la candidatura." },
  { title: "Noticias", text: "Comunicados, videos, fotografías y novedades de campaña." },
  { title: "Participa", text: "Espacio para sumarse, colaborar y recibir información." },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="topline">NÚÑEZ CARD 2026</div>
        <p className="eyebrow">Candidatura a la Presidencia del Colegio de Abogados de la República Dominicana</p>
        <h1>Dr. Francisco Núñez Cáceres</h1>
        <p className="term">Presidente 2026–2029</p>
        <p className="motto">Transparencia · Moralidad · Justicia</p>
        <div className="actions">
          <a href="#programa" className="primary">Conoce el programa</a>
          <a href="#escucha" className="secondary">Núñez te escucha</a>
        </div>
        <p className="visual-note">Identidad visual provisional. El logotipo oficial registrado se incorporará cuando sea entregado.</p>
      </section>

      <section className="section" id="programa">
        <div className="section-heading">
          <span>PLATAFORMA DIGITAL</span>
          <h2>Información directa, participación y comunicación con el gremio.</h2>
        </div>
        <div className="grid">
          {sections.map((item) => (
            <article className="card" key={item.title} id={item.title === "Núñez te escucha" ? "escucha" : undefined}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button type="button" disabled>Próximamente</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="notice">
          <strong>Proyecto en construcción.</strong>
          <p>Estamos preparando la primera versión funcional. Los contenidos biográficos, programa oficial y recursos gráficos se incorporarán únicamente cuando estén confirmados.</p>
        </div>
      </section>

      <footer>
        <strong>NÚÑEZ CARD 2026</strong>
        <span>Transparencia · Moralidad · Justicia</span>
      </footer>
    </main>
  );
}
