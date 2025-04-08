<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Checklist de Copy VSL</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #f7f7f7;
    }
    h1 {
      font-size: 2em;
    }
    h2 {
      margin-top: 30px;
    }
    li {
      cursor: pointer;
      margin-bottom: 6px;
    }
    .checked {
      text-decoration: line-through;
      color: green;
    }
  </style>
</head>
<body>
  <h1>🧠 Checklist de Copy VSL</h1>
  <div id="checklist"></div>

  <script>
    const checklist = {
      "Lead": [
        "Big Idea impactante",
        "Headline com benefício claro",
        "Identificação do avatar",
        "Criação de tensão ou mistério",
        "Promessa ousada",
        "Transição para história ou autoridade"
      ],
      "História": [
        "Personagem principal (relatável)",
        "Problema real e intenso",
        "Momento de virada (descoberta)",
        "Emoção crua e vulnerabilidade",
        "Construção de autoridade ou validação"
      ],
      "Mecanismo": [
        "Nome exclusivo do mecanismo",
        "Explicação simples e lógica",
        "Origem ou inspiração única",
        "Porque nunca funcionou antes",
        "Por que agora funciona (nova ciência ou descoberta)"
      ],
      "Oferta": [
        "Apresentação do produto",
        "Benefícios principais",
        "Provas (testemunhos, estudos, números)",
        "Bônus e garantias",
        "Urgência ou escassez",
        "Chamada para ação (CTA)"
      ]
    };

    const container = document.getElementById("checklist");

    Object.keys(checklist).forEach((bloco) => {
      const section = document.createElement("div");
      const title = document.createElement("h2");
      title.textContent = bloco;
      section.appendChild(title);

      const ul = document.createElement("ul");
      checklist[bloco].forEach((item, i) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => {
          li.classList.toggle("checked");
        });
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    });
  </script>
</body>
</html>
