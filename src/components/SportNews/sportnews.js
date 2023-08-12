import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Pagination, Button } from "react-bootstrap";
import dummy from "../../assets/icons/dummy.png";
function SportsNews() {
  const [sportsData, setSportsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function GetData(page) {
      let url =
        `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5f6a53bf1d3742a5a0a2a0693f1ef917&page=${page}`;

      try {
        let data = await fetch(url);
        let parseddata = await data.json();
        setSportsData(parseddata.articles);
        setTotalResults(parseddata.totalResults)
        console.log(parseddata)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    GetData(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalResults / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main p-2">
      <Container fluid>
        <h2>IndiaNews.com - Sports</h2>
        <Row xs={1} md={2} lg={3} xxl={4} className="g-4 mt-2">
          {sportsData.map((article, idx) => (
            <Col key={idx}>
              <Card className="bg-dark text-white custom-card">
                <Card.Img
                  variant="top"
                  src={article.urlToImage ? article.urlToImage : dummy}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = dummy;
                  }}
                  style={{ height: "200px", objectFit: "cover" }} 
                />
                <Card.Body className="card-body">
                  <div className="card-content">
                    <Card.Title className="text-uppercase text-warning text-truncate">
                      {article.author}
                    </Card.Title>
                    <Card.Title className="fs-6 text-danger">
                      {article.title}
                    </Card.Title>
                    <Card.Text className="text-truncate">
                      {article.description}
                    </Card.Text>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Button variant="danger">
                      <a
                        href={article.url}
                        target="_blank"
                        className="text-white text-decoration-none"
                        rel="noopener noreferrer"
                      >
                        Read more...
                      </a>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Pagination */}
        {totalResults > itemsPerPage && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination>
              {pageNumbers.map((pageNumber) => (
                <Pagination.Item
                  key={pageNumber}
                  active={pageNumber === currentPage}
                  onClick={() => handlePageChange(pageNumber)}
                  className={pageNumber === currentPage ? "active" : ""}
                >
                  {pageNumber}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        )}
      </Container>
    </div>
  );
}


export default SportsNews;
