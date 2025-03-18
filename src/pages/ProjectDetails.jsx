import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProjectDetailsCard from '../components/ProjectDetailsCard';
import HeaderPanel from '../components/HeaderPanel';

const ProjectDetails = () => {
    const { id } = useParams(); // Obtém o ID do projeto da URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`https://trampolim-api-express.onrender.com/api/v1/projects/${id}`);
                setProject(response.data.data); // Atualiza o estado com os detalhes do projeto
            } catch (error) {
                console.error('Erro ao buscar detalhes do projeto:', error);
                setError('Erro ao carregar os detalhes do projeto. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjectDetails();
    }, [id]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Carregando detalhes do projeto...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    if (!project) {
        return <div className="flex justify-center items-center h-screen">Projeto não encontrado.</div>;
    }

    return (
        <section className='h-auto'>
            <HeaderPanel />
            <div className="flex justify-center items-center h-screen">
                <ProjectDetailsCard
                    nomeProjeto={project.nomeProjeto}
                    nomeLider={project.nomeLider}
                    integrantes={project.integrantes}
                    estagioIdeia={project.estagioIdeia}
                    edital={project.edital}
                    descricaoIdeia={project.descricaoIdeia}
                    diferencialInovacao={project.diferencialInovacao}
                    modeloNegocio={project.modeloNegocio}
                    tecnologiasUtilizadas={project.tecnologiasUtilizadas}
                    linkPitch={project.linkPitch}
                />
            </div>
        </section>

    );
};

export default ProjectDetails;