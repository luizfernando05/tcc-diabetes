# 👨‍💻 TCC Diabetes

Este repositório contém os códigos e experimentos desenvolvidos para o Trabalho de Conclusão de Curso (TCC) intitulado **"Previsçao do Diabetes Usando Técnicas de Machine Learning: Uma Análise Comparativa de Modelos e Aplicação Prática"**. O objetivo do projeto é avaliar e comparar algoritmos de aprendizado de máquina na tarefa de prever o risco de diabetes com base em atributos clínicos e demográficos.

![Static Badge](https://img.shields.io/badge/Status-Em_Desenvolvimento-blue)

## 📌 Objetivos

- Utilizar algoritmos supervisionados de Machine Learning para prever a ocorrência de diabetes.
- Comparar o desempenho dos modelos com base em métricas como acurácia, precisão, recall e F1-score.
- Aplicar técnicas de pré-processamento e balanceamento para lidar com a desproporcionalidade das classes.
- Analisar a importância dos atributos na predição da doença.
- Desenvolver uma API para integrar o melhor modelo treinado, facilitando seu uso em aplicações práticas.

## 🧪 Tecnologias Utilizadas

As tecnologias utilizadas no projeto são as seguintes:

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0803.svg?style=for-the-badge&logo=typeorm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## 🗂️ Organização do Projeto

```
root/
├─ api-diagly/
│  ├─  src/
│  │   ├─ application/
│  │   ├─ domain/
│  │   ├─ infra/
│  │   ├─ presentations/
│  │   ├─ providers/
│  │   ├─ routes/
│  │   ├─ shared/
│  │   └─ index.ts
├─ diagly-app/
│  ├─  public/
│  ├─  src/
│  │   ├─ assets/
│  │   ├─ components/
│  │   ├─ pages/
│  │   ├─ routes/
│  │   ├─ services/
│  │   ├─ App.jsx/
│  │   ├─ index.jsx/
│  │   └─ styles.css
│  └─  index.html
├─ ml-models/
│  ├─  dataset/
│  ├─  images/
│  ├─  models/
│  ├─  notebooks/
│  ├─  scripts/
│  └─  ModelsResults.md/
├─ model-api/
│  ├─ controllers/
│  ├─ ml-model/
│  ├─ models/
│  ├─ services/
│  ├─ utils/
│  ├─ app.py
│  └─ requirements.txt
├─ readme.md
└─ .gitignore
```

## 🛠️ Como utilizar

Caso queira rodar o treinamento dos modelos de ML implementados em sua máquina local, siga os seguintes passos:

- i. Clone o repositório:

  > git clone https://github.com/luizfernando05/tcc-diabetes

- ii. Instale os pacotes necessários do Python:

  > pip install -r requirements.txt

- iii. Execute os Jupyters Notebooks.

Para rodar a API Diagly, siga os seguintes passos:

Obs: certifique-se de ter todas as tecnologias necessárias instaladas em seu ambiente local.

- iv. Abra o diretório `model-api` em seu terminal:

  > cd model-api

- v. Instale os pacotes necessários do Python:

  > pip install -r requirements.txt

- vi. Rode a API Python que disponibiliza o modelo treinado na porta 5000:

  > python app.py

- vii. Abra o diretório `api-diagly` em seu terminal:

  > cd api-diagly

- viii. Instale as dependências necessárias do Node:

  > npm install

- ix. Inicie o Docker em sua máquina local;

- x. Crie o seu arquivo `.env`, no diretório `api-diagly`, com base no arquivo `.env.example` disponibilizado no repositório;

- xi. Rode a aplicação com o comando:

  > npm run dev

## ⭐ Resultados dos Modelos

Foram treinados os modelos [Decision Tree](/root/ml-models/notebooks/TrainningDT.ipynb), [Gradient Boosting](/root/ml-models/notebooks/TrainningGB.ipynb), [K-Nearest Neighbors](/root/ml-models/notebooks/TrainningKNN.ipynb), [Naive Bayers](/root/ml-models/notebooks/TrainningNB.ipynb), [Random Forest](/root/ml-models/notebooks/TrainningRF.ipynb) e [Suport Vector Machine](/root/ml-models/notebooks/TrainningSVM.ipynb).

Obs:

- Classe 0: diabético;
- Classe 1: pré diabético;
- Classe 2: não diabético.

#### Resultados com todas as características

<table>
        <thead>
            <tr>
                <th rowspan="2">Modelo</th>
                <th rowspan="2">Acurácia</th>
                <th colspan="3">Precisão</th>
                <th colspan="3">Recall</th>
                <th colspan="3">F1-Score</th>
            </tr>
            <tr>
                <th>Classe 0</th>
                <th>Classe 1</th>
                <th>Classe 2</th>
                <th>Classe 0</th>
                <th>Classe 1</th>
                <th>Classe 2</th>
                <th>Classe 0</th>
                <th>Classe 1</th>
                <th>Classe 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>DT</td>
                <td>98%</td>
                <td>1.00</td>
                <td>0.91</td>
                <td>0.88</td>
                <td>0.98</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.99</td>
                <td>0.95</td>
                <td>0.93</td>
            </tr>
            <tr>
                <td>RF</td>
                <td>99%</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.91</td>
                <td>0.99</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.99</td>
                <td>1.00</td>
                <td>0.95</td>
            </tr>
            <tr>
                <td>SVM</td>
                <td>96%</td>
                <td>1.00</td>
                <td>0.77</td>
                <td>0.84</td>
                <td>0.96</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.98</td>
                <td>0.87</td>
                <td>0.91</td>
            </tr>
            <tr>
                <td>KNN</td>
                <td>94%</td>
                <td>0.98</td>
                <td>0.82</td>
                <td>0.70</td>
                <td>0.94</td>
                <td>0.90</td>
                <td>0.90</td>
                <td>0.96</td>
                <td>0.86</td>
                <td>0.79</td>
            </tr>
            <tr>
                <td>GB</td>
                <td>98%</td>
                <td>1.00</td>
                <td>0.91</td>
                <td>0.91</td>
                <td>0.98</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.99</td>
                <td>0.95</td>
                <td>0.95</td>
            </tr>
            <tr>
                <td>NB</td>
                <td>94%</td>
                <td>0.99</td>
                <td>0.64</td>
                <td>0.75</td>
                <td>0.93</td>
                <td>0.90</td>
                <td>1.00</td>
                <td>0.96</td>
                <td>0.75</td>
                <td>0.86</td>
            </tr>
            <tr>
                <td>LR</td>
                <td>95%</td>
                <td>0.99</td>
                <td>0.64</td>
                <td>0.87</td>
                <td>0.96</td>
                <td>0.90</td>
                <td>0.95</td>
                <td>0.98</td>
                <td>0.75</td>
                <td>0.91</td>
            </tr>
        </tbody>
</table>

#### Resultados com as KBests características

<table>
        <thead>
            <tr>
                <th rowspan="2">Modelo</th>
                <th rowspan="2">Acurácia</th>
                <th colspan="3">Precisão</th>
                <th colspan="3">Recall</th>
                <th colspan="3">F1-Score</th>
            </tr>
            <tr>
                <th>Classe 0</th>
                <th>Classe 1</th>
                <th>Classe 2</th>
                <th>Classe 0</th>
                <th>Classe 1</th>
                <th>Classe 2</th>
                <th>Classe 0</th>
                <th>Classe 1</th>
                <th>Classe 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>DT</td>
                <td>98%</td>
                <td>1.00</td>
                <td>0.91</td>
                <td>0.88</td>
                <td>0.98</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.99</td>
                <td>0.95</td>
                <td>0.93</td>
            </tr>
            <tr>
                <td>RF</td>
                <td>99%</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.91</td>
                <td>0.99</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.99</td>
                <td>1.00</td>
                <td>0.95</td>
            </tr>
            <tr>
                <td>SVM</td>
                <td>96%</td>
                <td>1.00</td>
                <td>0.77</td>
                <td>0.84</td>
                <td>0.96</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.98</td>
                <td>0.87</td>
                <td>0.91</td>
            </tr>
            <tr>
                <td>KNN</td>
                <td>94%</td>
                <td>0.98</td>
                <td>0.82</td>
                <td>0.70</td>
                <td>0.94</td>
                <td>0.90</td>
                <td>0.90</td>
                <td>0.96</td>
                <td>0.86</td>
                <td>0.79</td>
            </tr>
            <tr>
                <td>GB</td>
                <td>98%</td>
                <td>1.00</td>
                <td>0.91</td>
                <td>0.91</td>
                <td>0.98</td>
                <td>1.00</td>
                <td>1.00</td>
                <td>0.99</td>
                <td>0.95</td>
                <td>0.95</td>
            </tr>
            <tr>
                <td>NB</td>
                <td>94%</td>
                <td>0.99</td>
                <td>0.64</td>
                <td>0.75</td>
                <td>0.93</td>
                <td>0.90</td>
                <td>1.00</td>
                <td>0.96</td>
                <td>0.75</td>
                <td>0.86</td>
            </tr>
            <tr>
                <td>LR</td>
                <td>95%</td>
                <td>0.99</td>
                <td>0.64</td>
                <td>0.87</td>
                <td>0.96</td>
                <td>0.90</td>
                <td>0.95</td>
                <td>0.98</td>
                <td>0.75</td>
                <td>0.91</td>
            </tr>
        </tbody>
</table>

## 👥 Equipe do Projeto

Discente

- Luiz Fernando da Cunha Silva (UFERSA)

Docente Orientadora

- Prof. Dra. Samara Martins Nascimento (UFERSA)
