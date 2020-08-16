/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repository, Error } from './styles';
import api from '../../services/api';
import logoImg from '../../assets/Logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: { login: string; avatar_url: string };
}

const Dashboard: React.FC = () => {
  const [newRep, setNewRep] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    // trazer os repositorios que estão no storage
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storageRepositories) {
      // converter para array
      return JSON.parse(storageRepositories);
    }
    // caso não encontra nada, iniciar com array vazio
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRep) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRep}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRep(''); // Input com valor em branco depois de clicar no botão
      setInputError(''); // Ocultar a Tag de erro
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRep}
          onChange={e => setNewRep(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repository>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight />
          </Link>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
