/* ===============================
   CONTEXTUAL INFO ENGINE
   PDF → UI INTERACTIVE
================================ */
document.querySelectorAll('.stat').forEach(stat => {
  if (stat.textContent.includes('12+')) {
    stat.setAttribute(
      'data-info',
      'Mais de 12 anos de experiência profissional em design, marketing e performance.'
    );
  }

  if (stat.textContent.includes('CRM')) {
    stat.setAttribute(
      'data-info',
      'Implantação de CRM, estruturação de funil de vendas e integração marketing–comercial.'
    );
  }

  if (stat.textContent.includes('Ads')) {
    stat.setAttribute(
      'data-info',
      'Gestão de campanhas em Meta Ads e Google Ads com foco em conversão e leads.'
    );
  }

  if (stat.textContent.includes('UX')) {
    stat.setAttribute(
      'data-info',
      'Experiência em UX/UI, arquitetura da informação e design orientado ao usuário.'
    );
  }
});
