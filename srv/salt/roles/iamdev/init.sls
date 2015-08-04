yum-packs:
  pkg.latest:
    - pkgs:
      - nodejs

install_demo_app:
  pkg.installed:
    - sources:
      - bangpy-demo: salt://files/bangpy-demo-1.0-1.x86_64.rpm

/etc/systemd/system/bangpy-demo.service:
  file.managed:
    - source: salt://files/bangpy-demo.service
    - user: root
    - group: root
    - mode: 600

bangpy-demo:
  service:
    - running
    - enable: True
